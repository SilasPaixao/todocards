import {useContext} from "react";
import {GlobalContext} from "./global/GlobalContext";
import {Router} from "./pages/Router";
import {ThemeProvider, createTheme} from "@material-ui/core";

function App() {

  const {darkMode} = useContext(GlobalContext)

  const theme = createTheme({

    palette:{
      type: darkMode?'dark':'light',
      secondary:{
        light:'#2f6bd4',
        main:'#2f6bd4'
      },
      background:{
        paper: darkMode?'dark':'light'
      }
    }
  });

    return (
        <ThemeProvider theme={theme}>
          <Router />
        </ThemeProvider>
    );
}

export default App;
