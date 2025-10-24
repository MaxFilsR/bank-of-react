import Header from "./Components/Header";
import { Routes, Route } from "react-router";
import HomePage from "./pages/home";
import NotFoundPage from "./pages/notFound";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />

        {/* <Route path="/login" element={<AboutPage />} />
        <Route path="/credits" element={<CoinDetailsPage />} />
        <Route path="/debits" element={<CoinDetailsPage />} />
        <Route path="*" element={<NotFoundPage />} /> */}

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
