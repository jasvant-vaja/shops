// import React from 'react'

import Hero from "../Components/Hero/Hero"
import Newcollection from "../Components/NewCollections/Newcollection"
import Newsletter from "../Components/NewsLetter/Newsletter"
import Offers from "../Components/Offers/Offers"
import Popular from "../Components/popular/Popular"

 const Shop = () => {
  return (
    <div>
      <Hero/>
      <Popular/>
      <Offers/>
      <Newcollection/>
      <Newsletter/>
    </div>
  )
}

export default Shop