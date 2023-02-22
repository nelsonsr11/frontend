import { Route, Routes, Link } from "react-router-dom";
import "./App.css";
import TicketPage from "./components/TicketPage";
import AdminPage from "./components/AdminPage";
import HomePage from "./components/HomePage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ticket-page" element={<TicketPage />}></Route>
        <Route path="/admin" element={<AdminPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
