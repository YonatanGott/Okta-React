import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import AppWithRouterAccess from './AppWithRouterAccess';
import { Container } from '@material-ui/core';


function App() {
  return (
    <Container className="App">
      <Router>
        <AppWithRouterAccess />
      </Router>
    </Container>
  );
}

export default App;
