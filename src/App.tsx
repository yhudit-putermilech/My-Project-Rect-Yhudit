import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { UserProvider } from './context/UserContext';
import { store } from './store/store';
import AppRoutes from './routes/AppRoutes';

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <UserProvider>
          <AppRoutes />
        </UserProvider>
      </BrowserRouter>
    </Provider>
  );
};

export default App;