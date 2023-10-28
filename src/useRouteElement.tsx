import * as React from 'react'
import { Navigate, Outlet, useRoutes } from 'react-router-dom'
import LoginLayout from './layouts/LoginLayout'
import Login from './pages/Login/Login'
import { AppContext } from './contexts/app.context'
import HomeLayout from './layouts/HomeLayout'
import Home from './pages/Home/Home'

function ProtecedRoute() {
  const { isAuthenticated } = React.useContext(AppContext)
  return isAuthenticated ? <Outlet /> : <Navigate to='login' />
}
function RejectedRoute() {
  const { isAuthenticated } = React.useContext(AppContext)
  return !isAuthenticated ? <Outlet /> : <Navigate to='/' />
}

const useRouteElements = () => {
  const routeElements = useRoutes([
    {
      path: '',
      element: <RejectedRoute />,
      children: [
        {
          path: 'login',
          element: (
            <LoginLayout>
              <Login />
            </LoginLayout>
          )
        }
      ]
    },
    {
      path: '',
      element: <ProtecedRoute />,
      children: [
        {
          path: '/',
          index: true,
          element: (
            <HomeLayout>
              <Home />
            </HomeLayout>
          )
        },
        // {
        //   path: '/comment',
        //   element: (
        //     <AdminLayout title='Danh sách bình luận'>
        //       <Comment />
        //     </AdminLayout>
        //   )
        // },
        // {
        //   path: '/contact',
        //   element: (
        //     <AdminLayout title='Danh sách liên hệ'>
        //       <Contact />
        //     </AdminLayout>
        //   )
        // },
        // {
        //   path: '/user',
        //   element: (
        //     <AdminLayout title='Danh sách nhân viên'>
        //       <Users />
        //     </AdminLayout>
        //   )
        // },
        // {
        //   path: '/product',
        //   element: (
        //     <AdminLayout title='Danh sách sản phẩm'>
        //       <Products />
        //     </AdminLayout>
        //   )
        // },
        // {
        //   path: '/category',
        //   element: (
        //     <AdminLayout title='Danh sách danh mục'>
        //       <Categories />
        //     </AdminLayout>
        //   )
        // },
        // {
        //   path: '/order',
        //   element: (
        //     <AdminLayout title='Danh sách đơn hàng'>
        //       <Oders />
        //     </AdminLayout>
        //   )
        // },
        // {
        //   path: '/message',
        //   element: (
        //     <AdminLayout title='Danh sách tin nhắn'>
        //       <Messages />
        //     </AdminLayout>
        //   )
        // }
      ]
    }
  ])

  return routeElements
}
export default useRouteElements
