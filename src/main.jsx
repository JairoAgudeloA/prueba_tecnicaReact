import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Main } from './pages/Main.jsx'
import "./main.css"
import { Series } from './pages/Series';
import { Movies } from './pages/Movies';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' Component={Main} />
        <Route path='/Series' Component={Series}/>
        <Route path='/Movies' Component={Movies}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
