import React from 'react'
import ReactDOM from 'react-dom/client'
import { App} from './App.jsx'
import {Provider} from 'react-redux'
import {store} from './app/store.js'


const root=ReactDOM.createRoot(document.getElementById('root'))
root.render(
  //debo poner React.Fragment para poder tener más de un elemento
  <React.Fragment>
    <Provider store={store}>
      <App/>
    </Provider> 
  </React.Fragment>
)
