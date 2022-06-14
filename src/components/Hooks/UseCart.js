import { useState, useEffect } from "react";
import { getStoredCart } from "../utilities/fakeDb";
 




const useCart = () => {
  const [selectedService, setselectedService] = useState([]);

  useEffect(() => {
    const cart =  getStoredCart();
    setselectedService(cart);
  }, []);

  function getStoredCart() {
    let cart;
    const isHave = localStorage.getItem("cart");
    if (isHave) {
      cart = JSON.parse(isHave);
    } else {
      cart = [];
    }
    return cart;
  }



  function addToCart(key) {
    const isHave = selectedService.find((selected) => selected.key ===    key);
    if (isHave) {
      alert('course has been selected!')
    }
    else {
      const newSelection = [...selectedService,   key];
      localStorage.setItem('cart', JSON.stringify(newSelection));
      setselectedService(newSelection);


    }


  }

  function remove(key) {
    console.log(key)
    const selectAfterRemove = selectedService.filter(
      (course) => course._id !== key
    );
    console.log(selectAfterRemove);
    const proceed = window.confirm('Are you sure to remove?')
    if (proceed) {
      localStorage.setItem("cart", JSON.stringify(selectAfterRemove));
      setselectedService(selectAfterRemove);
    }
  }


  return { setselectedService, remove, addToCart, selectedService };
};

export default useCart;