import { useEffect, useState } from "react";

function Cart() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchCart = () =>
      fetch("https://dummyjson.com/carts")
        .then((res) => res.json())
        .then((data) => setCart(data.carts));

    fetchCart();
  }, []);

  console.log(cart, "cart");

  return (
    <div>
      <h1>Cart</h1>

      {cart.map((item) => (
        <div key={item.id}>
          <h2>Cart ID: {item.id}</h2>

          {item.products?.map((product) => (
            <div key={product.id}>
              <h3>{product.title}</h3>
              <p>Discounted Total: {product.discountedTotal}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Cart;