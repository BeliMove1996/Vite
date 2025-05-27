import type { JSX } from 'react';
import { useState } from 'react'
import reactLogo from './assets/Teong.jpg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header.jsx';
import Items from './components/Items.jsx';

function App() {
  var [count, setCount] = useState<JSX.Element | null>(<span>click to get info</span>);

  return (
    <>
      <div>
        <div>
          <h1>Items from API</h1>
          {/* <Items/>  */}
        </div>
        <Header/>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount(<Items/>)}>
          {/* <Items/> */}
          {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more 
      </p>
      <p className="read-the-docs">
        response
      </p>
    </>
  )
}

export default App
