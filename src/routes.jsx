import { createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";



const Home = lazy(() => import('./pages/Home'));
const Help = lazy(() => import('./pages/Help'));
const router = createBrowserRouter([
  {
    path : "/",
    element: (
        <Home />
    )
  },
  {
    path : "/help",
    element: (
        <Help />
    )
  },
])

export default router;