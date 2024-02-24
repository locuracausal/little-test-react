import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'




function App() {
  const countries : string[] = ['India', 'USA', 'France' ]
  const [countriesSelected, setCountriesSelected] = useState<string[]>([])
  const handleChecked = (countryName:string) => {
    console.log(countryName)
    if(countriesSelected.includes(countryName))
      setCountriesSelected(countriesSelected.filter(item => item !== countryName))
    else
      setCountriesSelected([...countriesSelected,countryName] )
  }
  const isAllSelected = () => countries.every(c => countriesSelected.includes(c))  
  const handleSelectAll = () => {
    if (isAllSelected())
      setCountriesSelected([])
    else
      setCountriesSelected(countries)

  }


  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <div className='card'>
          {/* <CheckboxCountry country={{name:'Select all', value:false}}/> */}
          <div className='checkbox' >
            <p>Select all</p>
            <input data-cy="select-all" type="checkbox" value={'Select all'} checked={countries.every(c => countriesSelected.includes(c))} onClick={() =>  handleSelectAll()} />
          </div>
          {countries.map((country:string) =>   
          <div className='checkbox'>
            <p>{country}</p>
            <input type="checkbox" data-cy={`checkbox-${country}`} value={country} checked={countriesSelected.includes(country)} onClick={() => handleChecked(country) } />
          </div> )}
          
        </div>
        
        
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
