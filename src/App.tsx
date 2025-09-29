import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { routes } from './routes/appRoutes';
import { Provider } from 'react-redux';
import { store } from './app/store';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor } from './app/configureStore';

function App() {
  const router = createBrowserRouter(routes);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  )
}

export default App
