import { RouterProvider } from 'react-router';
import { router } from './routes';
import { ShowsProvider } from './context/ShowsContext';

function App() {
  return (
    <ShowsProvider>
      <RouterProvider router={router} />
    </ShowsProvider>
  );
}

export default App;