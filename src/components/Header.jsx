import React from 'react'
import { useSelector } from 'react-redux'


const Header = () => {

  const {flights,isError,isLoading}= useSelector((store)=>store)

  return (
    <header>
        <div>
        <img src="./logo.png" alt="logo" />
        <h3>UAE - Fligths Radar</h3>

        </div>
        {isLoading 
        ?( <p>Flights Loading</p> )
        :!isError 
        ? ( <p><span>{`${flights.length}`}</span> Flights Found  </p> )
        : "There is a problem"
        }

    </header>
  )
}

export default Header