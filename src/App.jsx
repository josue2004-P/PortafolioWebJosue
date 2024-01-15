import { HashRouter,Routes,Route } from "react-router-dom";
import Home from "./views/Home";
import '@fortawesome/fontawesome-free/css/all.min.css';


export default function App() {
  return (
    <HashRouter>
      <Routes>
      <Route
          path="/"
          element={<Home/>}
        />
      </Routes>
    </HashRouter>
  );
}
