import { ThemeProvider, styled } from "styled-components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lightTheme } from "./utils/Theme";
import Authentications from "./pages/Authentications";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Workouts from "./pages/Workouts";
import { useSelector } from "react-redux";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text_primary};
  overflow-x: hidden;
  overflow-y: hidden;
  transition: all 0.2s ease;
`;

function App() {
  const { currentUser } = useSelector((state) => state.user);

  return (
    <ThemeProvider theme={lightTheme}>
      <BrowserRouter>
        {currentUser ? (
          <Container>
            <Navbar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/workouts" element={<Workouts />} />
            </Routes>
          </Container>
        ) : (
          <Container>
            <Authentications />
          </Container>
        )}
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
