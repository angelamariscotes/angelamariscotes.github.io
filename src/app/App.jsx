import { RouterProvider } from 'react-router';
import { router } from './routes';
import { Toaster } from 'react-hot-toast';

function AppProviders({ children }) {
  return children;
}

export default function App() {
  return (
    <AppProviders>
      <Toaster position="top-center" />
      <RouterProvider router={router} />
    </AppProviders>
  );
}