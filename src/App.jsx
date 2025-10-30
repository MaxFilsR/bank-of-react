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

  const [balance, setBalance] = useState(1234567.89);
  const [credits, setCredits] = useState([]); // now just numbers
  const [debits, setDebits] = useState([]); // now just numbers
  const [error, setError] = useState({ visible: false, message: "" });

  const showError = (msg) => {
    setError({ visible: true, message: msg });
  };

  // Only handle numbers now
  const addCredit = (amount) => {
    if (typeof amount !== "number" || amount <= 0) return;

    setCredits((prev) => [...prev, amount]);
    setBalance((prev) => prev + amount);
  };

  const addDebit = (debitAdd) => {
    const amount=debitAdd.amount;
    if (typeof amount !== "number" || amount <= 0) return;

    if (amount > balance) {
      showError("Debit amount exceeds available balance!");
      return;
    }
    const CurrentDate= new Date().toISOString().split('T')[0];
    const newDebitObject={
      ...debitAdd,
      date:CurrentDate,
    };


    setDebits((prev) => [...prev, newDebitObject]);
    setBalance((prev) => prev - amount);
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
            element={<CreditsPage balance={balance} addCredit={addCredit} />}
          />
          <Route
            path="/debits"
            element={<DebitsPage balance={balance} addDebit={addDebit} debits={debits} />}
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
