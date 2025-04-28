import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './style.scss';
import Root from './root';
import ErrorPage from "./error-page";
import TirarDados from "./routes/TirarDados/TirarDados"
import NPCs from './routes/NPCs/NPCs'
import CurrencyConverter from './routes/CurrencyConverter/CurrencyConverter';
import Rules from "./routes/Rules/Rules.jsx";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        {
          errorElement: <ErrorPage />,
          children: [
            { index: true, element: <TirarDados /> },
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