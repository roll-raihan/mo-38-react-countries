import Countries from './countries/Countries'
import './App.css'
import { Suspense } from 'react'


const countriesPromise = fetch("https://openapi.programming-hero.com/api/all")
  .then(res => res.json())


function App() {
  return (
    <>
      <Suspense fallback={<p>Nadir on the go...</p>}>
        <Countries countriesPromise={countriesPromise}></Countries>
      </Suspense>
    </>
  )
}

export default App
