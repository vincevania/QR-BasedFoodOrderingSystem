import React from 'react'
import NavBar from './NavBar';
import Category from './Category';
import BodyItems from './BodyItems';
import 'bootstrap/dist/css/bootstrap.css';

function CustomerInterface() {
  return (
    <>
        <div className="background-image" style={{color: 'white'}}>
            <div>
              <NavBar />
            </div>
            <div className="text-4xl md:text-6xl lg:text-7xl xl:text-9xl " style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh', fontFamily: 'Poppins, sans-serif'}}>
                <span >Welcome to Ymum!</span>  
            </div>
        </div>
        <Category />
    </>
  )
}

export default CustomerInterface