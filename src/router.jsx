import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";
import './style.scss';
import Root from './root';
import Home from './Home';
import ErrorPage from "./error-page";
import TirarDados from "./routes/TirarDados/TirarDados"
import NPCs from './routes/NPCs/NPCs'
import CurrencyConverter from './routes/CurrencyConverter/CurrencyConverter';
import Rules from "./routes/Rules/Rules.jsx";

const Router = () => {
  const router = createHashRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        {
          errorElement: <ErrorPage />,
          children: [
            { index: true, element: <Home /> },
            { path: "dice", element: <TirarDados /> },
            { path: "npc", element: <NPCs /> },
            { path: "rules", element: <Rules /> },
            { path: "currency-converter", element: <CurrencyConverter /> },
          ],
        },
      ]
    },
  ]);

  return (
    <RouterProvider router={router} />
  )
}
export default Router;