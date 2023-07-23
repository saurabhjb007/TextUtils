import "./App.css";
import About from "./Components/About";
import Alert from "./Components/Alert";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
      showAlert(" : Dark Mode has been Enabled", "success");
      document.title = "TextUtils DarkMode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert(" : Light Mode has been Enabled", "success");
      document.title = "TextUtils LightMode";
    }
  };

  // const toggle2Mode = () => {
  //   if (mode === "light") {
  //     setMode("primary");
  //     document.body.style.backgroundColor = "#7ab2cf";
  //     showAlert(" : Blue Mode has been Enabled", "success");
  //     // document.title = "TextUtils BlueMode";
  //   } else {
  //     setMode("light");
  //     document.body.style.backgroundColor = "white";
  //     showAlert(" : Light Mode has been Enabled", "success");
  //     // document.title = "TextUtils LightMode";
  //   }
  // };

  return (
    <>
      <Router>
      <Navbar
        title="TextUtils"
        about="About"
        mode={mode}
        toggleMode={toggleMode}
        // toggle2Mode={toggle2Mode}
      />
      <Alert alert={alert} />
      {/* <TextForm
        heading="Enter text to Analyze"
        mode={mode}
        showAlert={showAlert}
      /> */}
      <Routes>
      <Route path="/about" element={<About mode={mode}/>}></Route>
      <Route path="/" element={<TextForm mode={mode} showAlert={showAlert} />} ></Route>
      </Routes>
      </Router>
    </>
  );
}

export default App;
