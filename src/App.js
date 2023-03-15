import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import { originals,action,comedy,horror,romance,documentary } from './urls'
import './App.css'
import Banner from './Components/Banner/Banner'
import RowPost from './Components/RowPost/RowPost'


function App() {
  return (
    <div className='App'>
      <Navbar/>
      <Banner/>
      <RowPost  url={originals} title="Netflix Originals" />
      <RowPost url={action} title="Action Movies" isSmall />
      <RowPost url={comedy} title="Comedy Movies"isSmall/>
      <RowPost url={horror} title="Horror Movies" isSmall />
      <RowPost url={romance} title="Romantic Movies"isSmall/>
      <RowPost url={documentary} title="Documentaries" isSmall />
      
    </div>
  )
}

export default App
