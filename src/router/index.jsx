import { createBrowserRouter } from "react-router-dom";
import BookDetailsPage from "../pages/BookDetailsPage";
import Faq from "../pages/Faq";
import { ROUTES } from "../routes";
import CommonLayout from "../layout/CommonLayout";
import Homepage from "../pages/Homepage";
import NotFound from "../components/NotFound";

const router = createBrowserRouter([
  {
    path: `${ROUTES.HOME}`,
    element: <CommonLayout />,
    children: [
      {
        path: `${ROUTES.HOME}`,
        element: <Homepage />,
      },
      {
        path: `${ROUTES.FAQ}`,
        element: <Faq />,
      },
      {
        path: `${ROUTES.SINGLE_BOOK.STATIC}`,
        element: <BookDetailsPage />,
      },
      {
        path: `${ROUTES.Not_Found}`,
        element: <NotFound />,
      },
    ],
  },
]);

export default router;
