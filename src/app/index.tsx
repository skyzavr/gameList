import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { AppLayout } from '@pages/AppLayout';
import { Home } from '@pages/home';
import { GamePage } from '@pages/gamePage';
import { NotFound } from '@pages/notFound';
import ScrollTo from '@shared/ui/ScrollTo/ScrollTo';

import ThemeContextProvider from './context/ThemeContext';

import './styles/index.css';

const dataMode = (paramName: string, preferedParam: string): string => {
  const isParamExist = localStorage.getItem(paramName);
  return isParamExist || preferedParam;
};
const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/gamePage',
        element: <GamePage />,
        errorElement: <NotFound />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]);

const App = () => {
  return (
    <ThemeContextProvider init={dataMode('theme', 'dark')}>
      <RouterProvider router={router} />
      <ScrollTo />
    </ThemeContextProvider>
  );
};

export default App;
