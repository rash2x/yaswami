import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {createTheme, CssBaseline, ThemeProvider} from "@mui/material";
import {telegram} from "./telegram.js";

const theme = createTheme({
  palette: {
    primary: {
      main: telegram.themeParams.button_color
    },
    text: {
      primary: telegram.themeParams.text_color,
      secondary: telegram.themeParams.hint_color
    },
    background: {
      paper: telegram.themeParams.bg_color,
      default: telegram.themeParams.secondary_bg_color
    }
  }
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App/>
    </ThemeProvider>
  </React.StrictMode>
)
