import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import './style.css';
import Root from './root';
import ErrorPage from "./error-page";
import TirarDados from "./routes/TirarDados/TirarDados"
import NPCs from './routes/NPCs/NPCs'
import CurrencyConverter from './routes/CurrencyConverter/CurrencyConverter';

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
          { path: "currency-converter", element: <CurrencyConverter /> },
        ],
      },
    ]
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
