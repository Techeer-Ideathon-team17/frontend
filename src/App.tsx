import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './pages/layout';
import Main from './pages/Main';
import ChatPg from './components/ChatPg';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Main />,
      },
      {
        path: 'chat',
        element: <ChatPg />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
