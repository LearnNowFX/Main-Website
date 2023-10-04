import { ROUTES } from "./routes/routes";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const CLIENT_URL = import.meta.env.DOMAIN_URL || window.location.origin;

function App() {
  return (
    <>
      <BrowserRouter basename={CLIENT_URL}>
        <Routes>
          {ROUTES.map(route => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
