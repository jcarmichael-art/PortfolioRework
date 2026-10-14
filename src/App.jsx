import { useState } from 'react'
import './index.css'

import Header from './components/Header'
import AboutMe from './components/AboutMe'
import Skills from './components/Skills'
import GithubFetch from './components/GithubFetch'
import WorkHistory from './components/WorkHistory'

function App() {

  return (
    <>
    <div className='divBox'>
    <Header />

    <div>
    <AboutMe/>
    </div>

    <div>
    <GithubFetch />
    </div>   

    <div>
    <Skills/>
    </div>

    <div>
    <WorkHistory />
    </div>



    </div>
    </>
  )
}

export default App
