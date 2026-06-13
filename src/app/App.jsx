import { RouterProvider } from 'react-router';
import { router } from './routes';

function AppProviders({ children }) {
  return children;
}

export default function App() {
  return (
    <AppProviders>
      <RouterProvider router={router} />
    </AppProviders>
  );
}