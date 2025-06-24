
import Register from './components/Register'
import Login from './components/Login';
import Home from './components/Home';
import {createBrowserRouter,RouterProvider} from "react-router-dom";

function App() {

  const router = createBrowserRouter([
    {
      path:"/register",
      element:<Register/>

    },
    {
      path:"/login",
      element:<Login/>
    },
    {
      path:"/",
      element:<Home/>
    },

  ])
  return ( 
     <div>
      <RouterProvider router={router}></RouterProvider>
     </div>
  );
}

export default App;
