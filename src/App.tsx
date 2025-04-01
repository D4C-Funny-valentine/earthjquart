import './App.css'
import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './routes'
import { CssBaseline, responsiveFontSizes, StyledEngineProvider, ThemeProvider } from '@mui/material'
import theme from './theme'
import { Provider } from 'react-redux'
import { persistor, store } from './store'
import { PersistGate } from 'redux-persist/integration/react'

function App() {

  const ReponsiveTheme = responsiveFontSizes(theme)

  return (
    <BrowserRouter
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true
      }}
    >
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <StyledEngineProvider injectFirst>
            <CssBaseline />
            <ThemeProvider theme={ReponsiveTheme}>
              <AppRoutes />
            </ThemeProvider>
          </StyledEngineProvider>
        </PersistGate>
      </Provider>
    </BrowserRouter>
  )
}

export default App
