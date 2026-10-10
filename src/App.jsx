import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './index.css'

import Header from './components/Header'
import AboutMe from './components/AboutMe'
import GithubFetch from './components/GithubFetch'

function App() {

  return (
    <>
    <div className='divBox'>

    <div>
    <Header />
    </div>

    <div>
    <AboutMe/>
    </div>

    <div>
    <GithubFetch />
    </div>


    </div>
    </>
  )
}

export default App
