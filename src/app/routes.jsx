import { createBrowserRouter } from "react-router-dom";
import Root from "./components/root";
import Home from "./components/home";
import Contact from "./components/contact";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "contact", Component: Contact }
    ]
  }
]);
export { router };
