import './App.scss';
import SideMenu from './components/SideMenu';
import Main from './components/Main'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'


function App() {
  return (
    <Router>
      <SideMenu />
      <Main />
    </Router>
  );
}

export default App;
