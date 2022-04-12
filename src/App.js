import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import SignIn from"./pages/SignIn" 
import SignUp from"./pages/SignUp" 
import Page3 from"./pages/page3"
import { ThemeProvider } from '@mui/material/styles';
import theme from './config/theme.config';

function App() {
  return (
    <div className="App">
      <Router>
        <ThemeProvider theme={theme}>
            <Routes>
              <Route exact path="/" element={<SignIn />} />
              <Route exact path="sign-up" element={<SignUp />} />
              <Route exact path="page3" element={<Page3 />} />
            </Routes>
          </ThemeProvider>
      </Router>
    </div>
  );
}

export default App;