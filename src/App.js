import React from "react";
import { Redirect, Route, Switch, BrowserRouter } from "react-router-dom";
import EmptyPage from "./components/common/emptyPage";
import LoginForm from "./components/loginForm";
import "./App.css";
import {ToastContainer} from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";


function App() {
  return (
    <main className="container">
      <ToastContainer />
      <div className="content">
      <BrowserRouter>
        <Switch>
          <Route path="/empty-page/:value" component={EmptyPage} />
          <Route exact path="/" component={LoginForm} />
          <Redirect to="/empty-page" />
        </Switch>
      </BrowserRouter>
      </div>
    </main>
  );
}

export default App;
