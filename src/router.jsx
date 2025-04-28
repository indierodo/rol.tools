import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";
import './style.scss';
import Root from './root';
import ErrorPage from "./error-page";
import TirarDados from "./routes/TirarDados/TirarDados"
import NPCs from './routes/NPCs/NPCs'
import CurrencyConverter from './routes/CurrencyConverter/CurrencyConverter';
import Rules from "./routes/Rules/Rules.jsx";
import DistanceConverter from "./routes/DistaceConverter/DistanceConverter.jsx";

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
            { index: true, element: <TirarDados /> },
            { path: "npc", element: <NPCs /> },
            { path: "currency-converter", element: <CurrencyConverter /> },
            { path: "distance-converter", element: <DistanceConverter /> },
            { path: "rules", element: <Rules /> },
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