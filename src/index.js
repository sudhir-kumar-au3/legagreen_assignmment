import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Route, BrowserRouter, Redirect } from 'react-router-dom';

const Home = () => {
  const doRedirect = () => {
    let log = true;
    if (log){
      return <Redirect to='/dashboard'></Redirect>
    }
  }
  return(
    <BrowserRouter>
    <Route path='/'><App/></Route>
    {doRedirect}
  </BrowserRouter>
  )
}
ReactDOM.render(
  <React.StrictMode>
   <Home/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
