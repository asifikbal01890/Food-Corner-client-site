import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Layout/Main/Main';
import Home from './Component/Home/Home';
import Services from './Component/Services/Services';
import Blog from './Component/Blog/Blog';
import Login from './Component/Login/Login';
import SignUp from './Component/SignUp/SignUp';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      children: [
        {
          path: "/",
          element: <Home></Home>
        },
        {
          path: "/services",
          element: <Services></Services>
        },
        {
          path: "/blog",
          element: <Blog></Blog>
        },
        {
          path: "/login",
          element: <Login></Login>
        },
        {
          path: "/register",
          element: <SignUp></SignUp>
        },
      ]
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App;
