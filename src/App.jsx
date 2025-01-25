import { useState } from "react";
import "./App.css";
import './index.css';
import FormComponent from "./FormComponent";
import { useSelector } from "react-redux";
import WelcomePage from "./WelcomePage";

function App() {
  const loggedIn = useSelector((state) => state.form.isLoggedIn);
  const name = useSelector((state) => state.form.name);

  console.log("Is Logged In:", loggedIn);
  console.log("Name in Redux:", name);

  return loggedIn ? <WelcomePage /> : <FormComponent />

      {/* {!loggedIn ? <FormComponent /> :
    <WelcomePage />
    } */}
  
  
}

export default App;
