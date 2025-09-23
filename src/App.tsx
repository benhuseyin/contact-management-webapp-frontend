import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { routes } from './routes/appRoutes';
import { Provider } from 'react-redux';
import { store } from './app/store';

function App() {
  const router = createBrowserRouter(routes);


  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  )
}

export default App
