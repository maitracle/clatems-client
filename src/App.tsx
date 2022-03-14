import React from 'react';

import 'react-toastify/dist/ReactToastify.css';
import { Slide, ToastContainer } from 'react-toastify';

import createSagaMiddleware from 'redux-saga';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from 'store';
import { rootSaga } from 'store/rootSaga';
import RootRouter from 'routers/RootRouter';
import AppInitializer from 'AppInitializer';
import styled from '@emotion/styled';
import { Device } from 'styles/viewport';


const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

function App() {

  return (
    <>
      <Provider store={store}>
        <div className='App'>
          <RootRouter>
            <AppInitializer />
          </RootRouter>
        </div>
      </Provider>
      <StyleToast
        position={'bottom-right'}
        autoClose={2000}
        closeButton={false}
        hideProgressBar={true}
        newestOnTop={true}
        closeOnClick={true}
        pauseOnFocusLoss={true}
        draggable={true}
        pauseOnHover={true}
        transition={Slide}
      />
    </>
  );
}

const StyleToast = styled(ToastContainer)`
  --toastify-color-light: #121212;
  --toastify-toast-width: 100%;
  --toastify-icon-color-success: white;
  --toastify-text-color-light: white;

  &.Toastify__toast-container {
    padding: 20px 20px 0;
  }

  .Toastify__toast {
    padding: 20px 14px;
    margin-bottom: 20px;
    border-radius: 4px;
  }

  .Toastify__toast-body {
    padding: 0;
  }

  @media screen and ${Device.desktop} {
    --toastify-toast-width: 420px;
  }

  @media screen and (min-width: 421px) {
    &.Toastify__toast-container {
      padding: 0 20px 0;
    }
  }
`;

export default App;
