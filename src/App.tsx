import { ROUTES } from "./routes/routes";
import Footer from "./components/footer/footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header/header";

const CLIENT_URL = import.meta.env.DOMAIN_URL;

function App() {
  return (
    <>
      <Header />
      <BrowserRouter basename={CLIENT_URL}>
        <Routes>
          {ROUTES.map(route => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
