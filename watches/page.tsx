
import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'

const Watches = () => {

  const watchData = [
    {
      id:1,name:'Rolex' , price: 12000 , description:'Luxury Watch',image:'/rol.jpg'
    },
    {
      id:2,name:'Omega' , price: 8000 , description:'Elegent Desing',image:'/omg.jpg'
    },
    {
      id:3,name:'Patek Philippe' , price: 25000 , description:'Sporty Timeplace',image:'/patek.jpg'
    },
    {
      id:4,name:'TAG Heuer' , price: 5000 , description:'Sporty and Stylish',image:'/tag.jpg'
    },
    {
      id:5,name:'Breitling' , price: 3000 , description:'Bold and Rugged',image:'/bril.jpg'
    },
    {
      id:6,name:'Seiko' , price: 1000 , description:'Affordable and reliable',image:'/s.jpg'
    }
  ]

  return (
    <div>
      <Header/>
    <div className='watches'>
      {watchData.map((watch)=>(
        <div key={watch.id} className='watch-card'>
          <img src={watch.image} alt={watch.name} />
          <h3>{watch.name}</h3>
          <p>{watch.description}</p>
          <div className='price'>${watch.price}</div>
          <button>Add to Cart</button>
        </div>
      ))}
    </div>
    <Footer/>
    </div>
  )
}

export default Watches