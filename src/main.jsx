
import ReactDOM from 'react-dom';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './component/Home/Home';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />);
