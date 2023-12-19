import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { items } from './Data'

const Navbar = ({setData}) => {


        /*we have too get this value and reditrect into next 
        page so we can do this using useNavigate hooks */

        const navigate = useNavigate();

        const [searchTerm , setSearchTerm] = useState("")

        const handleSubmit = (e) => {
                e.preventDefault();
                //we have to navigate into { /search/:term } this page
                navigate(`/search/${searchTerm}`);
        }




        const filterByCategory = (Category) => {
                const element = items.filter((product) => product.category === Category)
                console.log(element)
                setData(element) 
        }

        const filterByPrice = (price) => {
                const byprice = items.filter((product) => product.price >= price)
                setData(byprice)
        }




  return (
    <header className="sticky-top">
        <div className="nav-bar sticky-top">
                    <Link to={'/'} className="brand">
                            E-cart
                    </Link>
                    <form onSubmit={handleSubmit} className="search-bar">
                            <input type="text" placeholder='Enter Products' 
                            onChange={(e) => setSearchTerm(e.target.value)} 
                            value={searchTerm}/>
                    </form>

                    <Link to={'/Cart'} className="cart">
                            cart
                    </Link>
        </div>
        <div className="nav-bar-wrapper">
            <div className="items">Filter by -{'>'}</div>
            <div className="items">No Filter</div>

            <div onClick={() => filterByCategory('mobiles')}
            className="items">Mobiles</div>

            <div onClick={() => filterByCategory('laptops')}
            className="items">Laptops</div>

            <div onClick={() => filterByCategory('tablets')}
            className="items">Tablets</div>

            <div onClick={() => filterByPrice('29999')}
            className="items">{'>'}=29999</div>

            <div onClick={() => filterByPrice('49999')}
            className="items">{'>'}=49999</div>

            <div onClick={() => filterByPrice('69999')}
            className="items">{'>'}=69999</div>

            <div onClick={() => filterByPrice('89999')}
            className="items">{'>'}=89999</div>
        </div>
      
    </header>
  )
}

export default Navbar
