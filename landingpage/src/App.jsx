import Landing from "../src/pages/Landing";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
