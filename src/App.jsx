import { Routes, Route, useLocation } from "react-router";
import HomePage from "./pages/home/home";
import LoginPage from "./pages/login/login";
import NotFoundPage from "./pages/notFound";
import UserProfilePage from "./pages/userProfile/userProfile";
import Sidebar from "./Components/Sidebar/Sidebar";
import CreditsPage from "./pages/credits/credits";
import DebitsPage from "./pages/debits/debits";
import { useState, useEffect } from "react";
import ErrorPopup from "./components/ErrorPopup/ErrorPopup";

function App() {
  const location = useLocation();
  const sidebarRoutes = ["/user-profile", "/credits", "/debits"];
  const showSidebar = sidebarRoutes.includes(location.pathname);

  const [balance, setBalance] = useState(0);
  const [credits, setCredits] = useState([]);
  const [debits, setDebits] = useState([]);
  const [error, setError] = useState({ visible: false, message: "" });

  useEffect(() => {
    const fetchCredits = async () => {
      try {
        const res = await fetch(
          "https://johnnylaicode.github.io/api/credits.json"
        );
        if (!res.ok) throw new Error("Data Fetch Failed");
        const data = await res.json();
        console.log(data);
        setCredits(data);
      } catch (err) {
        setError({ visible: true, message: err.message });
      }
    };
    fetchCredits();
  }, []);

  useEffect(() => {
    const fetchDebits = async () => {
      try {
        const res = await fetch(
          "https://johnnylaicode.github.io/api/debits.json"
        );
        if (!res.ok) throw new Error("Data Fetch Failed");
        const data = await res.json();
        console.log(data);
        setDebits(data);
      } catch (err) {
        setError({ visible: true, message: err.message });
      }
    };
    fetchDebits();
  }, []);

  // Recalculate balance whenever credits or debits change
  useEffect(() => {
    const totalCredits = credits.reduce(
      (sum, credit) => sum + credit.amount,
      0
    );
    const totalDebits = debits.reduce((sum, debit) => sum + debit.amount, 0);
    const calculatedBalance = totalCredits - totalDebits;
    setBalance(Math.round(calculatedBalance * 100) / 100);
  }, [credits, debits]);

  const showError = (msg) => {
    setError({ visible: true, message: msg });
  };

  const addCredit = (creditData) => {
    if (typeof creditData.amount !== "number" || creditData.amount <= 0) return;
    const currentDate = new Date().toISOString().split("T")[0];
    const newCreditObject = {
      ...creditData,
      date: currentDate,
    };
    setCredits((prev) => [...prev, newCreditObject]);
  };

  const addDebit = (debitAdd) => {
    const amount = debitAdd.amount;
    if (typeof amount !== "number" || amount <= 0) return;

    // Calculate what the balance would be after this debit
    const totalCredits = credits.reduce(
      (sum, credit) => sum + credit.amount,
      0
    );
    const totalDebits = debits.reduce((sum, debit) => sum + debit.amount, 0);
    const currentBalance = totalCredits - totalDebits;

    if (amount > currentBalance) {
      showError("Debit amount exceeds available balance!");
      return;
    }

    const currentDate = new Date().toISOString().split("T")[0];
    const newDebitObject = {
      ...debitAdd,
      date: currentDate,
    };
    setDebits((prev) => [...prev, newDebitObject]);
  };

  return (
    <>
      {showSidebar && <Sidebar />}
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/user-profile"
            element={<UserProfilePage balance={balance} />}
          />
          <Route
            path="/credits"
            element={
              <CreditsPage
                balance={balance}
                addCredit={addCredit}
                credits={credits}
              />
            }
          />
          <Route
            path="/debits"
            element={
              <DebitsPage
                balance={balance}
                addDebit={addDebit}
                debits={debits}
              />
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <ErrorPopup
          message={error.message}
          visible={error.visible}
          onClose={() => setError({ visible: false, message: "" })}
        />
      </div>
    </>
  );
}

export default App;
