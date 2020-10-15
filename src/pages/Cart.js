import React, { useContext, useState } from 'react'
import CartItem from '../components/CartItem'
import { Context } from '../context'

export default function Cart() {
    const { cartItems, emptyCart } = useContext(Context)
    const [buttonText, setButtonText] = useState('Place Order')
    let total = 0

    const cartElements = cartItems.map(item => {
        total += item.price
        return <CartItem key={item.id} item={item} />
    })

    const placeOrder = () => {
        setButtonText('Ordering...')

        setTimeout(() => {
            console.log("Order Placed")
            setButtonText('Place Order')
            emptyCart()
        }, 3000)
    }

    return (
        <main className="cart-page">
            <h1 className="checkout text-medium">Check out:</h1>
            {cartElements}
            <p className="total-price text-medium">Total: {total.toLocaleString("en-US", { style: "currency", currency: "USD" })}</p>
            {
                cartItems.length ? null : <p className="text-medium">You have no items in your cart.</p>
            }
            <div className="order-button">
                <button disabled={cartItems.length ? false : true} onClick={() => placeOrder()}>{buttonText}</button>
            </div>
        </main>
    )
}