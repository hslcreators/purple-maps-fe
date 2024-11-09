import { createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";



const Home = lazy(() => import('./pages/Home'));
const Help = lazy(() => import('./pages/Help'));
const router = createBrowserRouter([
  {
    path : "/",
    element: (
      <Suspense fallback = {
        <div>Loading...</div>
      }>
      <Home />
    </Suspense>
    )
  },
  {
    path : "/help",
    element: (
        <Suspense fallback = {
          <div>Loading...</div>
        }>
          <Help />
        </Suspense>
    )
  },
])

export default router;