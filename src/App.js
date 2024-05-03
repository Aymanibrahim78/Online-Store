
import Root from "pages/Root";
import Cart from "./pages/Cart/Cart";

import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Details from "./pages/Details/Details";




const router = createBrowserRouter(
  createRoutesFromElements(
       <Route path="/" element={<Root />}>

       <Route index element={<Home />}/>
      <Route path="cart" element={<Cart />} />
      <Route path="product-detalis/:ID" element={<Details />} />


      <Route path="*" element={<NotFound />} />
 
    </Route>
  )
);





function App() {

  return (
   
     

      <RouterProvider router={router} />
   
  );
}

export default App;
