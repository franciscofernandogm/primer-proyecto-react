import React from 'react'
import ReactDOM from 'react-dom/client'
import { App} from './App.jsx'
import './index.css'

//import App from './App.jsx'


const root=ReactDOM.createRoot(document.getElementById('root'))
root.render(
  //debo poner React.Fragment para poder tener más de un elemento
  <React.Fragment>
    <App/>
  </React.Fragment>
)
