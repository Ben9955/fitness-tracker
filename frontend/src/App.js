import { ThemeProvider, styled } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import { lightTheme } from "./utils/Theme";
import Authentications from "./pages/Authentications";
import { useState } from "react";
import Navbar from "./components/Navbar";

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
  const [user, setUser] = useState(true);

  return (
    <ThemeProvider theme={lightTheme}>
      <BrowserRouter>
        {user ? (
          <Container>
            <Navbar />
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
