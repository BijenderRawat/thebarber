import { lazy, Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './components/MainPageComponents/RootLayout';

import { profileLoader, checkForToken } from './Loader/auth';

import BarberProfileRoutePage from './components/BarberProfile/BarberProfileRoutePage';
import BarberProfile from './components/BarberProfile/BarberProfile';
import ProfileMainRoot from './components/BarberProfile/ProfileOptions/ProfileMainRoot';
import ProfileMainPage from './components/BarberProfile/ProfileOptions/ProfileMainPage';

import { action as authenticationAction } from './components/Authentication/Authentication';
import { action as passwordChangeAction } from './components/AccountSettings/ChangePassword';
import { action as deleteAccountAction } from './components/AccountSettings/DeleteAccount';
import { action as editNameAction } from './components/BarberProfile/ProfileOptions/Name/EditName';
import { action as EditPhoneNumberAction } from './components/BarberProfile/ProfileOptions/PhoneNumber/EditPhoneNumber';
import { action as EditUPIAction } from './components/BarberProfile/ProfileOptions/PaymentID/EditUPI';
import { action as EditShopAction } from './components/BarberProfile/ProfileOptions/Shop/EditShop';
import { action as EditShopLocationAction } from './components/BarberProfile/ProfileOptions/Shop/EditShopLocation';

const ErrorPage = lazy(() => import('./jointhecommunity/ErrorPage'));
const About = lazy(() => import('./About/About'));
const MainPage = lazy(() => import('./jointhecommunity/MainPage'));
const Authentication = lazy(() => import('./components/Authentication/Authentication'));
const ChangePassword = lazy(() => import('./components/AccountSettings/ChangePassword'));
const DeleteAccount = lazy(() => import('./components/AccountSettings/DeleteAccount'));
const EditName = lazy(() => import('./components/BarberProfile/ProfileOptions/Name/EditName'));
const EditPhoneNumber = lazy(() => import('./components/BarberProfile/ProfileOptions/PhoneNumber/EditPhoneNumber'));
const EditUPI = lazy(() => import('./components/BarberProfile/ProfileOptions/PaymentID/EditUPI'));
const EditShop = lazy(() => import('./components/BarberProfile/ProfileOptions/Shop/EditShop'));
const EditShopLocation = lazy(() => import('./components/BarberProfile/ProfileOptions/Shop/EditShopLocation'));

const router = createBrowserRouter([
  {
    path: '/', element: <RootLayout />
  },
  {
    path: 'about', element: <Suspense><About /></Suspense>
  },
  {
    path: 'jointhecommunity',
    element: <Suspense><MainPage /></Suspense>,
    loader: checkForToken,
    errorElement: <Suspense><ErrorPage /></Suspense>,
    children: [
      {
        path: 'authentication',
        element: <Suspense><Authentication /></Suspense>,
        action: authenticationAction
      }
    ]
  },
  {
    path: 'jointhecommunity/profile',
    loader: profileLoader,
    element: <BarberProfileRoutePage />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <BarberProfile />
      },
      {
        path: ':profileoption',
        element: <ProfileMainRoot />,
        children: [
          {
            index: true,
            element: <ProfileMainPage />
          },
          {
            path: 'changepassword',
            element: <Suspense><ChangePassword /></Suspense>,
            action: passwordChangeAction
          },
          {
            path: 'deleteaccount',
            element: <Suspense><DeleteAccount /></Suspense>,
            action: deleteAccountAction
          },
          {
            path: 'editname',
            element: <Suspense><EditName /></Suspense>,
            action: editNameAction
          },
          {
            path: 'editphonenumber',
            element: <Suspense><EditPhoneNumber /></Suspense>,
            action: EditPhoneNumberAction
          },
          {
            path: 'editupi',
            element: <Suspense><EditUPI /></Suspense>,
            action: EditUPIAction
          },
          {
            path: 'editshopname',
            element: <Suspense><EditShop /></Suspense>,
            action: EditShopAction
          },
          {
            path: 'editshoplocation',
            element: <Suspense><EditShopLocation /></Suspense>,
            action: EditShopLocationAction
          }
        ]
      }
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;