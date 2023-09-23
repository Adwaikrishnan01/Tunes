import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { Provider } from 'react-redux'
import {store} from './redux/store.tsx'
import './index.css'
import {NextUIProvider} from "@nextui-org/react";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
   <NextUIProvider>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </NextUIProvider>
  </Provider>
)
