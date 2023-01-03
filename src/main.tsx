import React from 'react'
import ReactDOM from 'react-dom/client'
import { RecoilRoot } from 'recoil'
import { HashRouter as Router } from 'react-router-dom'

import App from './App'

if (typeof (window as any).global === 'undefined') {
  ;(window as any).global = window
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <RecoilRoot>
        <App />
      </RecoilRoot>
    </Router>
  </React.StrictMode>,
)
