import React from "react";

import { createContext, useState } from "react";
import { cards } from "../data/cards";

export const wishlistContext = createContext(null);

function WishlistContextProvider(props) {
  const [wishlistItems, setWishlistItems] = useState([]);
  
  
 

  const addToWishlist = (item) => {
    // create a Set from the wishlistItems array
    const set = new Set(wishlistItems);
    // add the item to the Set
    set.add(item);
    // convert the Set back to an array and set it as the new wishlistItems state
    setWishlistItems(Array.from(set));
    
  };
  const removeFromWishlist = (item) => {
    setWishlistItems(wishlistItems.filter((id) => id !== item));
  };
  console.log(wishlistItems);
  const contextValue = {
    wishlistItems,
    addToWishlist,
    removeFromWishlist,

  
  };
  return (
    <wishlistContext.Provider value={contextValue}>
      {props.children}
    </wishlistContext.Provider>
  );
}

export default WishlistContextProvider;
