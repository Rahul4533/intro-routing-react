import Home from "./pages/Home";
import Items from "./pages/items";
import About from "./pages/About";
import ItemDetails from "./pages/itemDetails";
import Errors from "./pages/errorpage";

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import Navbar from "./Navbar";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navbar />,
      errorElement: <Errors />,
      children: [
        { index: true, element: <Home /> },
        {
          path: "item",
          children: [
            {
              index: true,
              element: <Items />,
            },
            {
              path: ":id",
              element: <ItemDetails />,
            },
          ],
        },
        { path: "about", element: <About /> },
      ],
    },
  ]);

  //  const routes= createRoutesFromElements(

  //    <Route path="/" element={<Navbar />}>
  //     <Route index={true} element={<Home />}/>
  //     <Route path="item" element={<Items />}>
  //     <Route path=":id" element={<ItemDetails />}/>
  //     </Route>
  //     <Route path="about" element={<About />}/>
  //   </Route>

  //   )
  //   const router= createBrowserRouter(routes);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
