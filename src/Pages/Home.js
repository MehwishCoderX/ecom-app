import React from 'react'
import Navbar from '../Components/Nav/Navbar'
import SearchBar from '../Components/Search/SearchBar'
import Filters from '../Components/Hero/Filters'
// import Card from '../Components/HeroRight/Card'
import './Home.css';
import ProductList from '../Components/HeroRight/ProductList'


const Home = () => {
  return (
    <div>
       <Navbar/>
       <SearchBar/>
      <div className='HomeHero'>
      <Filters/>
 <ProductList/>
 {/* <Product/> */}
      </div>
      
    </div>
  )
}

export default Home
