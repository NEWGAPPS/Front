import Nav from "./components/Nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import First from "./pages/First";
import Third from "./pages/Third";
import GlobalStyles from "./styled";

function App() {
  const getTime = () => {
    let today = new Date();
    let hours = today.getHours(); // 시
    let minutes = today.getMinutes(); // 분
    let seconds = today.getSeconds(); // 초
    return `조회시간 ${hours < 10 ? "0" + hours : hours} : ${
      minutes < 10 ? "0" + minutes : minutes
    } : ${seconds < 10 ? "0" + seconds : seconds}`;
  };
  return (
    <>
      <GlobalStyles />
      <Nav />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<First getTime={getTime} />}></Route>
          <Route path="/Third" element={<Third />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
