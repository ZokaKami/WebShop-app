import React, { useEffect, useState } from "react";
import userz from "./storeUsers.js";
import Product from "./product.ts";
import QuantityButton from "./quantityButton.tsx";
export default function itemRender({ searchTerm }) {
  /* 
WHEN IMPORTING MONGO DB

useEffect(() => {
    // Fetch data from Express backend when the component mounts
    fetch("http://localhost:3001/getStore")
      .then((response) => response.json())
      .then((users) => setUsers(users))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  interface Item {
    id: string;
    title: string;
    name: string;
    price: number;
    image: string;
    filter: string[];
  }
  const [users, setUsers] = useState<Item[]>([]); */

  const filteredUsers = userz.filter((user) =>
    user.filter.some((filter) => filter.includes(searchTerm))
  );
  const [cart, setCart] = useState<Product[]>([]);
  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);
  const [quantities, setQuantities] = useState<{ [key: string]: number }>({});
  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
    // Initialize quantities state with default values for all items
    const initialQuantities = {};
    userz.forEach((item) => {
      initialQuantities[item.id] = 1;
    });
    setQuantities(initialQuantities);
  }, []);
  const addToCart = (product) => {
    // Calculate the total price based on the product price and selected quantity
    const totalPrice = product.price * (quantities[product.id] || 1);
    console.log(quantities[product.id]);
    // Check if the product is already in the cart
    const existingItemIndex = cart.findIndex((item) => item.id === product.id);

    // If the product is already in the cart, update its quantity and total price
    if (existingItemIndex !== -1) {
      const updatedCart = [...cart];

      updatedCart[existingItemIndex].quantity * (quantities[product.id] || 1);
      updatedCart[existingItemIndex].totalPrice =
        product.price * (quantities[product.id] || 1);
      setCart(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    } else {
      // If the product is not in the cart, add it as a new item
      const newItem = {
        ...product,
        quantity: quantities[product.id] || 1,
        totalPrice,
      };
      console.log(newItem);
      const newCart = [...cart, newItem];
      setCart(newCart);
      localStorage.setItem("cart", JSON.stringify(newCart));
    }
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [product.id]: 1,
    }));
  };
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => {
    console.log("Mouse Enter");
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    console.log("Mouse Leave");
    setIsHovered(false);
  };
  const resetCart = () => {
    setCart([]);
    localStorage.setItem("cart", JSON.stringify([]));
  };
  const updateQuantity = (productId, quantity) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productId]: quantity,
    }));
  };
  const calculateTotalPrice = () => {
    return cart.reduce((total, item) => total + item.totalPrice, 0);
  };
  return (
    <div className="flex flex-wrap justify-center xl:px-24 px-12 text-[16px]">
      <div className="absolute right-12 top-6 border-2   w-[120px]  h-auto p-2  ">
        {cart.map((itemz) => (
          <div>
            <h1>
              {itemz.name} : {itemz.totalPrice} $
            </h1>
          </div>
        ))}

        <p>Total : {calculateTotalPrice()} $</p>
        <button className="border-2 p-2" onClick={resetCart}>
          Empty cart
        </button>
      </div>
      {userz.map((item) => (
        <div
          key={item.id}
          data-filter={item.filter.join(" ")}
          className={`w-full md:w-1/3 xl:w-1/4 p-4  max-w-[350px] min-w-[280px] text-xl font-bold text-gray-700${
            filteredUsers.includes(item) ? "" : " hidden"
          }`}
        >
          <div className="bg-white pb-2 shadow-md rounded-lg overflow-hidden">
            <img src={item.image} className="w-full h-64 object-fill   " />

            <div className="px-4 py-2 flex justify-around  ">
              <h2 className="  ">{item.name}</h2>
              <p className=" "> {item.price}$</p>
            </div>

            <div className="flex items-center px-4  text-[16px] font-normal">
              <div className="flex mx-auto">
                <button onClick={() => addToCart(item)} className="  ">
                  Add to cart
                </button>

                <QuantityButton
                  quantUp={() =>
                    updateQuantity(item.id, quantities[item.id] + 1)
                  }
                  quantDown={() =>
                    updateQuantity(
                      item.id,
                      Math.max(1, quantities[item.id] - 1)
                    )
                  }
                  quantity={quantities[item.id] || 1}
                />
              </div>

              <div className="relative flex items-center">
                <button
                  className="bg-blue-500 text-white px-2 rounded-full focus:outline-none"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  i
                </button>
                {isHovered && (
                  <div className="absolute  right-4 w-48 p-2 z-10  bg-gray-800 text-white text-sm rounded shadow-lg transition-opacity duration-300">
                    Search terms : {item.filter.join(" ")}
                  </div>
                )}
              </div>
            </div>

            <div></div>
          </div>
        </div>
      ))}
    </div>
  );
}
