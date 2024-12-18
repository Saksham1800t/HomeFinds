import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AboutUs from './Components/LandingPages/AboutUs';
import AdminDashboard from './Components/Admin/Dashboard';
import BuyNow from './Components/Services/BuyNow';
import BuyPage from './Components/Services/BuyPage';
import Donate from './Components/Services/Donate';
import Home from './Components/LandingPages/Home';
import ProductAdd from './Components/Product/ProductAdd';
import RentPage from './Components/Services/RentPage';
import Login from './Components/User/Login';
import Signup from './Components/User/Signup';
import UserProfile from './Components/User/UserProfile';
import UserType from './Components/Requests/RequestType';
import ContactUs from './Components/LandingPages/ContactUs';
import AllUsers from './Components/Admin/AllUsers';
import AllProducts from './Components/Admin/AllProducts';
import UpdateUser from './Components/User/updateUser';
import UpdateProducts from './Components/Product/UpdateProducts';
import MadedReq from './Components/Requests/MadedReq'
import ReceivedReq from './Components/Requests/ReceivedReq'
import SingleUser from './Components/User/SingleUser';
import SingleProduct from './Components/Product/SingleProduct';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/singleuser/:id',
      element: <SingleUser />,
    },
    {
      path: '/singleproduct/:id',
      element: <SingleProduct />,
    },
    {
      path: '/contactus',
      element: <ContactUs />
    },
    {
      path: '/buyNow/:id',
      element: <BuyNow />,
    },
    {
      path: '/updateProduct/:id',
      element: <UpdateProducts />,
    },
    {
      path: '/productAdd',
      element: <ProductAdd />,
    },
    {
      path: '/login',
      element: <Login />,
    },
    {
      path: '/Signup',
      element: <Signup />,
    },
    {
      path: '/RequestType',
      element: <UserType />,
    },
    {
      path: '/UserProfile',
      element: <UserProfile />,
    },
    {
      path: '/updateUser',
      element: <UpdateUser />,
    },
    {
      path: '/AdminDashboard',
      element: <AdminDashboard />
    },
    {
      path: '/adminAllUsers',
      element: <AllUsers />
    },
    {
      path: '/adminAllProducts',
      element: <AllProducts />
    },
    {
      path: '/BuyPage',
      element: <BuyPage />
    },
    {
      path: '/RentPage',
      element: <RentPage />
    },
    {
      path: '/AboutUs',
      element: <AboutUs />
    },
    {
      path: '/Donate',
      element: <Donate />
    },
    {
      path: '/MadedReq',
      element: <MadedReq/>
    },
    {
      path: '/ReceivedReq',
      element: <ReceivedReq/>
    }
  ])
  return (
    <>
        <RouterProvider router={router} />
    </>
  );
}
export default App;


