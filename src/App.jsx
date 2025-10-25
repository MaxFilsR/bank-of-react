import Header from "./Components/Sidebar";
import { Routes, Route, useLocation } from "react-router";
import HomePage from "./pages/home/home";
import LoginPage from "./pages/login/login";
import NotFoundPage from "./pages/notFound";
import UserProfilePage from "./pages/userProfile/userProfile";
import Sidebar from "./Components/Sidebar";
import CreditsPage from "./pages/credits/credits";
import DebitsPage from "./pages/debits/debits";
import { useState } from "react";

function App() {
  const location = useLocation();
  const sidebarRoutes = ["/user-profile", "/credits", "/debits"];
  const showSidebar = sidebarRoutes.includes(location.pathname);

  const [balance, setBalance] = useState(1234567.89);

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
          <Route path="/credits" element={<CreditsPage balance={balance} />} />
          <Route path="/debits" element={<DebitsPage balance={balance} />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
