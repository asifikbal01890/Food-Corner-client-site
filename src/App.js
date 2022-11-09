import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Layout/Main/Main';
import Home from './Component/Home/Home';
import Blog from './Component/Blog/Blog';
import Login from './Component/Login/Login';
import SignUp from './Component/SignUp/SignUp';
import FoodsContainer from './Component/FoodsContainer/FoodsContainer';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      children: [
        {
          path: "/",
          loader: () => fetch('http://localhost:5000/foodsLimit'),
          element: <Home></Home>
        },
        {
          path: "/Foods",
          loader: () => fetch('http://localhost:5000/foods'),
          element: <FoodsContainer></FoodsContainer>
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
