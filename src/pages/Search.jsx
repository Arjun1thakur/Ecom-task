import React, { useEffect, useState } from 'react'

const Search = ({data}) => {
    let [search,setSearch]=useState('')
    let productList = data

    function searchProduct(productList, itemName) {
        const lowerCaseItemName = itemName  ? itemName.toLowerCase() : null ;
        console.log(lowerCaseItemName);
        for (let i = 0; i < productList.length; i++) {
          const product = productList[i];
          console.log(product.title)
          const lowerCaseProductName = product.title ? product.title.toLowerCase() : null;
          console.log(lowerCaseProductName);
          if (lowerCaseProductName ?  lowerCaseProductName.includes(lowerCaseItemName) : null ) {
            return product; 
          }
        }
        return null; 
      }
    useEffect(()=>{
        let foundProduct = searchProduct(productList, search)
        if (foundProduct) {
        console.log(foundProduct)
          console.log(`Product found: ${foundProduct.title}`);
          console.log(`Price: $${foundProduct.price}`);
        } else {
          alert(`Product not found for the search term: ${search}`);
        }
      })

      let changeHandler =(e)=>{
        setSearch(e.target.value)
      }
  return (
    <>
        <input type="text" onChange={changeHandler} />
    </>
  )
}

export default Search