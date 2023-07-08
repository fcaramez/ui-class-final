import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import UsersList from "./pages/UsersList";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={<LandingPage />}
      />
      <Route
        path="/users"
        element={<UsersList />}
      />
    </Routes>
  );
}

export default App;
