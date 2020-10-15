import React, { useContext } from 'react'
import { Context } from '../context'
import useHover from '../hooks/useHover'

export default function CartItem({ item }) {

    const { removeFromCart } = useContext(Context)
    const [hovered, ref] = useHover()
    const { title, description, price, url, id } = item

    const iconClassName = hovered ? "ri-delete-bin-fill" : "ri-delete-bin-line"
    return (
        <div className="cart-item">
            <div className="cart-image-container">
                <i
                    onClick={() => removeFromCart(id)}
                    className={iconClassName}
                    ref={ref}
                ></i>
                <img src={item.url} />
            </div>
            <div className="cart-item-content">
                <h1 className="card-title text-medium">{title}</h1>
                <p className="text-medium">{description}</p>
                <div className="price-content">
                    <p className="card-price text-medium">{price.toLocaleString("en-US", { style: "currency", currency: "USD" })}</p>
                </div>
            </div>
        </div>
    )
}