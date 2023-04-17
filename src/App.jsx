import { useRef, useState} from 'react'

import rickandmorty from '/public/rickandmorty.webp'
import './App.css'
import UseFetch from './hooks/UseFetch'
import GetRandomLocation from './utils/GetRandomLocation'
import MainContent from './components/MainContent'



function App() {

  const [inputValue, setInputValue] = useState(GetRandomLocation())

  const url = `https://rickandmortyapi.com/api/location/${inputValue}`
  const [location, hasError] = UseFetch(url)

    const inputLocation = useRef()

  const handleSubmit = e =>{
    e.preventDefault()
    setInputValue(inputLocation.current.value)


  }
  

  return (
    <div className="App">
      <img className='img__header' src={rickandmorty} alt="Rick And Morty" />

      <form className='form' onSubmit={handleSubmit}>
        <input className='insertion' ref={inputLocation} type="text" placeholder='Enter a number from 1 to 120' />
        <button className='button__submit'>Search</button>
      </form>
        {
          hasError
          ? <h2>❌Hey! you must provide am id from 1 to 126😥</h2>
          : <MainContent 
          location={location}
          />
        }

  
    </div>
  )
}

export default App
