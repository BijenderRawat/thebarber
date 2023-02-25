import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Authentication, { action } from './components/Authentication/Authentication';
import BarberProfile from './components/BarberProfile/BarberProfile';

import RootLayout from './components/RootLayout';

import MainPage from './jointhecommunity/MainPage';
import ErrorPage from './jointhecommunity/ErrorPage';
import PageContent from './jointhecommunity/PageContent';

import { action as logoutLoader } from './components/Logout';

const router = createBrowserRouter([
  { path: '/', element: <RootLayout /> },
  { path: 'jointhecommunity', element: <MainPage />, errorElement: <ErrorPage />, children: [
    { index: true, element: <PageContent title="This page doesn't exist right now"><p>Go to Home Page</p></PageContent> },
      { path: 'authentication', element: <Authentication />, action: action },
      { path: 'profile', element: <BarberProfile /> }
      ] },
  { path: 'logout', action: logoutLoader}
]);


function App() {
  return <RouterProvider router={router} />;
}

export default App;