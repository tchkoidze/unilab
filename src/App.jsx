import { useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Landing from "./pages/Landing";
import Registration from "./pages/Registration";
import Header from "./layouts/Header";
import FormPage from "./pages/Form";
import Popup from "./components/Popup";
import Api from "./pages/ApiPage";

function App() {
  const [count, setCount] = useState(0);

  const location = useLocation();
  const hideHeaderRoutes = ["/", "/registration"];
  const shouldShowHeader = !hideHeaderRoutes.includes(location.pathname);
  const [close, setClose] = useState(false);
  console.log(close);

  return (
    <>
      {shouldShowHeader && <Header close={close} setClose={setClose} />}
      {close ? <Popup setClose={setClose} /> : null}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/form" element={<FormPage />} />
        <Route path="/api" element={<Api />} />
      </Routes>
    </>
  );
}

export default App;
