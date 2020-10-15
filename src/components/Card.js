import React, { useContext, useState } from 'react'
import { Context } from '../context'
import useHover from '../hooks/useHover'

export default function Card({ item }) {

    const { toggleFavorite, addToCart, cartItems, removeFromCart } = useContext(Context)

    const [hovered, ref] = useHover()
    const { title, url, price, description, id, isFavorite } = item

    const heartIcon = () => {
        if (isFavorite) {
            return <i className="ri-heart-fill favorite"
                onClick={() => toggleFavorite(id)}></i>
        } else if (hovered) {
            return <i className="ri-heart-line favorite"
                onClick={() => toggleFavorite(id)}></i>
        }
    }
    const cartIcon = () => {
        const inCart = cartItems.some((item) => item.id === id)

        if (inCart) {
            return <i className="ri-shopping-cart-fill cart" onClick={() => removeFromCart(id)} style={{ marginLeft: "auto" }}></i>
        } else if (hovered) {
            return <i className="ri-add-circle-line cart" onClick={() => addToCart(item)}></i>
        }
    }

    return (
        <div
            className='card'
            ref={ref}
        >
            <div className='image-container'>
                <img src={url} className='image' />
                <div className="icons-container">
                    {heartIcon()}
                    {cartIcon()}
                </div>
            </div>
            <div className="card-content">
                <p className="card-title text-medium">{title}</p>
                <div className="card-info text-medium">
                    <p>{description}</p>
                    <p className="card-price">${price}</p>
                </div>
            </div>
        </div>
    )
} 