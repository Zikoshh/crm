import ReactDOM from 'react-dom/client';
import App from './pages/App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.scss';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'profiles',
      },
      { path: 'content' },
      { path: 'tasks' },
      { path: 'merch' },
      { path: 'analytics' },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router}></RouterProvider>
);
