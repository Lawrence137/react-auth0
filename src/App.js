import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Logout from './components/Logout';

function App() {
  return (
    <main className="column">
      <h1>Auth0 Login</h1>
      <Login />
      <Logout />
    </main>
  );
}

export default App;
