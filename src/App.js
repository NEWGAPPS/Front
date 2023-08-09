import Nav from "./components/Nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalStyles } from "./styled";

function App() {
  return (
    <>
      <Nav></Nav>
      <BrowserRouter>
        <GlobalStyles />
        <Routes>
          <Route path="Home"></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
