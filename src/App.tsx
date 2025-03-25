'use server'

import { createBrowserRouter, RouterProvider } from "react-router-dom"

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <>main</>
  },
  {
    path: '/second',
    element: <>secondPage</>
  }
])

function App() {
  return (
      <RouterProvider router={appRouter}></RouterProvider>
  )
}

export default App
