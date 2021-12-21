import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import { StylesProvider, ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';

import { store } from './redux/store';

import { MainLayout } from './components/layout/MainLayout/MainLayout';
import { Homepage } from './components/views/Homepage/Homepage';
import { ProductDetails } from './components/views/ProductDetails/ProductDetails';
import { Cart } from './components/views/Cart/Cart';
import { NotFound } from './components/views/NotFound/NotFound';
import {theme} from './Theme.js';
import { FormOrder } from './components/views/FormOrder/FormOrder';
import { InfoOrder } from './components/views/InfoOrder/InfoOrder';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <StylesProvider injectFirst>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <MainLayout>
            <Switch>
              <Route exact path='/' component={Homepage} />
              <Route exact path='/cart' component={Cart} />
              <Route exact path='/order' component={FormOrder} />
              <Route exact path='/order/status' component={InfoOrder} />
              <Route exact path='/product/:id' component={ProductDetails} />
              <Route path='*' component={NotFound} />            
            </Switch>
          </MainLayout>
        </ThemeProvider>
      </StylesProvider>
    </BrowserRouter>
  </Provider>
);

export { App };
