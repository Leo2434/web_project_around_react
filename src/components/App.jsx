import Footer from "./Footer/Footer.jsx";
import Header from "./Header/Header.jsx";
import Main from "./Main/Main.jsx";
// import { useState } from "react";
// import "./App.css";

function App() {
  // const [count, setCount] = useState(0);
  return (
    <>
      <div className="page">
        <Header></Header>
        <Main></Main>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
