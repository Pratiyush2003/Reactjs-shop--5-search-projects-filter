import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { items } from './Data';
import Product from './Product';


const SearchItem = () => {

    const [filterData, setFilterData ] = useState([])
    const {term} = useParams();

    useEffect(() => {
      const filteredData = () => {
        const data = items.filter((P) => P.title.toLowerCase().includes(term.toLowerCase()));
        setFilterData(data);
      }
      filteredData();
    },[term])




  return (
    <div>
        <Product items={filterData}></Product>
    </div>
  )
}

export default SearchItem
