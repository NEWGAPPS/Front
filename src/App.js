import Nav from "./components/Nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import First from "./pages/First";
import Second from "./pages/Second";
import Third from "./pages/Third";
import GlobalStyles from "./styled";

function App() {
  return (
    <>
      <GlobalStyles />
      <Nav />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<First />}></Route>
          <Route path="/Second" element={<Second />}></Route>
          <Route path="/Third" element={<Third />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
