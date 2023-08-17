import Nav from "./components/Nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import First from "./pages/First";
import Third from "./pages/Third";
import GlobalStyles from "./styled";
import styled from "styled-components";

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
      {document.documentElement.clientWidth > 800 ? (
        <WindowContainer>
          <BodyContainer>
            <Nav />
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<First getTime={getTime} />}></Route>
                <Route path="/Third" element={<Third />}></Route>
              </Routes>
            </BrowserRouter>
          </BodyContainer>
        </WindowContainer>
      ) : (
        <>
          <Nav />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<First getTime={getTime} />}></Route>
              <Route path="/Third" element={<Third />}></Route>
            </Routes>
          </BrowserRouter>
        </>
      )}
    </>
  );
}

const WindowContainer = styled.div`
  width: 100vw;
  background-color: white;
`;

const BodyContainer = styled.div`
  max-width: 450px;
  margin: 0 auto;
  background-color: #231b2d;
`;

export default App;
