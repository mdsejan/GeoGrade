import { createBrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import MainLayout from "./Layouts/MainLayout";
import NotFound from "./components/NotFound";
import FirstYear from "./pages/FirstYear";
import SecoundYear from "./pages/SecoundYear";
import FourthYear from "./pages/FourthYear";
import ThirdYear from "./pages/ThirdYear";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "firstyear",
        element: <FirstYear />,
      },
      {
        path: "secoundyear",
        element: <SecoundYear />,
      },
      {
        path: "thirdyear",
        element: <ThirdYear />,
      },
      {
        path: "fourthyear",
        element: <FourthYear />,
      },
    ],
  },
]);

export default router;
