import React, { Suspense } from 'react';
import { Router } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import MomentUtils from '@date-io/moment';
import { Provider as StoreProvider } from 'react-redux';
import { ThemeProvider } from '@material-ui/styles';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import { theme } from './theme';
import { configureStore } from './store';
import routes from './routes';
import StylesProvider from './components/StylesProvider';
import './assets/scss/main.scss';

const store = configureStore();

function App({ history }) {
  return (
    <StoreProvider store={store}>
      <ThemeProvider theme={theme}>
        <StylesProvider direction={'ltr'}>
          <MuiPickersUtilsProvider utils={MomentUtils}>
            <Router history={history}>
              <Suspense fallback={<div>Loading..</div>}>
                {renderRoutes(routes)}
              </Suspense>
            </Router>
          </MuiPickersUtilsProvider>
        </StylesProvider>
      </ThemeProvider>
    </StoreProvider>
  );
}

export default App;
