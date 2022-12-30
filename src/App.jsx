import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";

import { AuthContext } from './context/AuthContext';

import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';

import './styles/global.scss';

function App() {
  const { currentUser } = useContext(AuthContext);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route 
            index 
            element={<Home />} 
          />
          <Route 
            path="login" 
            element={<Login />} 
          />
          <Route 
            path="register" 
            element={<Register />} 
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
