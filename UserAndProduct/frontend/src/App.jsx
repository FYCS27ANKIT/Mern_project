import { RouterProvider , createBrowserRouter} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

import Users from './components/User/Users'
import AddUser from './components/User/AddUser'
import EditUser from './components/User/EditUser'
import Products from './components/Product/Products'
import AddProduct from './components/Product/AddProduct'
import EditProduct from './components/Product/EditProduct'
import Error from './components/Error'
import Home from './components/Home'
import Layout from './components/Layout'

function App() {
  const path = createBrowserRouter([
    {
      path: '/',
      element: <Layout/>,
      error: <Error/>,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: 'user/',
          element: <Users />
        },
        {
          path : 'user/add',
          element : <AddUser/>
        },
        {
          path : 'user/edit/:id',
          element : <EditUser/>
        },
        {
          path: 'product/',
          element: <Products />
        },
        {
          path : 'product/add',
          element : <AddProduct/>
        },
        {
          path : 'product/edit/:id',
          element : <EditProduct/>
        }

      ]
    }
  ])

  return (
    <>
      <RouterProvider router={path}/>
    </>
  )
}

export default App
