import React from 'react'

//Redux
import { useSelector } from 'react-redux'

// Router
import { BrowserRouter as Router } from 'react-router-dom';

// Primefaces
import "primereact/resources/themes/tailwind-light/theme.css";
import "primereact/resources/primereact.min.css";
import 'primeicons/primeicons.css';
import '/node_modules/primeflex/primeflex.css'

// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

// CSS
import './App.css';

// Components
import Auth from './components/auth'
import Pages from './components/pages'

function App() {
  const authenticated = useSelector(state => state.AuthController.authenticated)

  return (
    <>
      {authenticated === true
        ? 
        <Router>
          <Pages />
        </Router>        
        : 
        <Auth/>
      }      
    </>
  );
}

export default App;
