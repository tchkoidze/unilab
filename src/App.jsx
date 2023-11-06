import { useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Landing from "./pages/Landing";
import Registration from "./pages/Registration";
import Header from "./layouts/Header";
import FormPage from "./pages/Form";

function App() {
  const [count, setCount] = useState(0);

  const location = useLocation();
  const hideHeaderRoutes = ["/", "/registration"];
  const shouldShowHeader = !hideHeaderRoutes.includes(location.pathname);

  return (
    <div>
      {shouldShowHeader && <Header />}

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/form" element={<FormPage />} />
      </Routes>
    </div>
  );
}

export default App;
