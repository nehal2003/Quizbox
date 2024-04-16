import './styles/App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Quiz from './components/Quiz';
import Result from './components/Result';
import Main from './components/Main';
import { CheckUserExist } from './helper/helper';

// create routes

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>
  },
  {
    path: '/quiz',
    element: <CheckUserExist><Quiz /></CheckUserExist>
  },
  {
    path: '/result',
    element: <CheckUserExist><Result /></CheckUserExist>
  },
])

function App() {
  return (
    <>
      <RouterProvider router={routes} />

    </>
  );
}

export default App;

