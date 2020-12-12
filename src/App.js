import Header from "./Components/Header/Header";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./Components/About/About";
import Blog from "./Components/Blog/Blog";
import Home from "./Components/Home/Home";
import Login from "./Container/Login";
import SignUp from "./Container/SignUp";
import { ThemeProvider } from "@material-ui/core/styles";
import { theme } from "./theme";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  const userProfile = JSON.parse(localStorage.getItem("user"));
  return (
    <>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Router>
            <Header user={userProfile} />
            <Switch>
              <Route path="/about" component={About} />
              <Route path="/blogs" component={Blog} />
              <Route exact path="/" component={Home} />
              <Route path="/login" component={Login} />
              <Route path="/signup" component={SignUp} />
            </Switch>
          </Router>
        </ThemeProvider>
      </Provider>
    </>
  );
}

export default App;
