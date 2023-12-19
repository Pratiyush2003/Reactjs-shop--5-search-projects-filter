import React, { useState } from 'react'
import Navbar from './Components/Navbar'
import Product from './Components/Product'
import SearchItem from './Components/SearchItem'
import Cart from './Components/Cart'
import { BrowserRouter as Router,
          Routes,
          Route
} from 'react-router-dom'
import ProductDetail from './Components/ProductDetail'
import { items } from './Components/Data'


const App = () => {

    const [data, setData] = useState([...items])

  return (
    <div>
      <Router>
      <Navbar setData = {setData} />
      <Routes>
        <Route path= "/" element = {<Product items={data}/>}> </Route>
        <Route path= "/product/:id" element = {<ProductDetail/>}></Route>
        <Route path= "/search/:term" element = {<SearchItem/>}></Route>
        <Route path= "/Cart" element = {<Cart/>}></Route>
      </Routes>
      </Router>

    </div>
  )
}

export default App


