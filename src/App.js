import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Layout/Main/Main';
import Home from './Component/Home/Home';
import Blog from './Component/Blog/Blog';
import Login from './Component/Login/Login';
import SignUp from './Component/SignUp/SignUp';
import FoodsContainer from './Component/FoodsContainer/FoodsContainer';
import CardDetails from './Component/CardDetails/CardDetails';
import MyReview from './Component/MyReview/MyReview';
import PrivateRoute from './Component/PrivateRoute/PrivateRoute';
import AddService from './Component/AddService/AddService';

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
          path: "/foods",
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
        {
          path: "/foods/:id",
          loader: ({params}) => fetch(`http://localhost:5000/foods/${params.id}`),
          element:<CardDetails></CardDetails>
        },
        {
          path: "/myReview",
          element: <MyReview></MyReview>
        },
        {
          path: "/addService",
          element: <PrivateRoute><AddService></AddService></PrivateRoute>
        }
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
