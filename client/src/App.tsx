import { RouterProvider, createBrowserRouter } from 'react-router-dom';
//import Login from './pages/auth/Login';
//import AuthLayout from './layouts/AuthLayout';
//import Signup from './pages/auth/Signup';
//import RecoverPassword from './pages/auth/RecoverPassword';
// import SSOLogin from './pages/auth/SSOLogin';
//import ResetPassword from './pages/auth/ResetPassword';
//import RequireAuth from './components/auth/RequireAuth';
import CreateForm from './pages/CreateForm';
import BaseLayout from './layouts/BaseLayout';
//import PersistLogin from './components/auth/PersistLogin';
import Error from './pages/Error';

import MyForms from './pages/MyForms';
import UpdateForm from './pages/UpdateForm';
import GeneratedForm from './pages/GeneratedForm';

const router = createBrowserRouter([

          {
            element: <BaseLayout />,
            children: [
              {
                path: '/',
                element: <CreateForm />,
              },
              {
                path: '/my-forms',
                element: <MyForms />,
              },
              {
                path: '/my-forms/:id/edit',
                element: <UpdateForm />,
              },
             
            ],
          },
      
  {
    path: 'forms/:id',
    element: <GeneratedForm />,
    errorElement: <Error />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
