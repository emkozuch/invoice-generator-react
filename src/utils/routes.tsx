import App from "../App";
import { NewInvoicePage } from "../components/pages/NewInvoicePage";
import { SettingsPage } from "../components/pages/SettingsPage";

export const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/invoices",
        element: <div>invoices</div>,
      },
      {
        path: "/settings",
        element: <SettingsPage />,
      },
      {
        path: "/new-invoice",
        element: <NewInvoicePage />,
      },
    ],
  },
];
