import { indigo } from "@mui/material/colors";
import { ThemeProvider, createTheme } from "@mui/material/styles";
// import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";

const theme = createTheme({
  palette: {
    primary: {
      main: indigo[500],
    },
  },
});

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        {/* <LoginPage /> */}
        <SignUpPage />
      </ThemeProvider>
    </div>
  );
}
export default App;
