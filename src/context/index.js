import React, { createContext, useState, useEffect } from 'react'

const Context = createContext()

function ContextProvider({ children }) {

    const [photos, setPhotos] = useState([])
    const [cartItems, setCartItems] = useState([])

    const url = 'https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json'

    useEffect(() => {
        fetch(url).then(res => res.json())
            .then(data => {
                const newData = data.map(item => (
                    item = {
                        ...item,
                        title: "Photo Title " + item.id,
                        description: "Consectetur adipiscing elit. Praesent in nibh sollicitudin.",
                        price: Math.floor(Math.random() * 15) + 1
                    }
                ))
                setPhotos(newData)
            })
    }, [])

    const toggleFavorite = (id) => {
        const newData = photos.map((item) => {
            if (item.id === id) {
                return {
                    ...item,
                    isFavorite: !item.isFavorite
                }
            }
            return item
        })
        setPhotos(newData)
    }

    const emptyCart = () => {
        setCartItems([])
    }

    const removeFromCart = (id) => {
        const newCart = cartItems.filter(item => item.id !== id)
        setCartItems(newCart)
    }

    const addToCart = (item) => {
        setCartItems((prevItems) => [...prevItems, item])
        console.log(cartItems)
    }

    return (
        <Context.Provider value={{ photos, toggleFavorite, cartItems, addToCart, removeFromCart, emptyCart }}>
            {children}
        </Context.Provider>
    )
}

export { ContextProvider, Context }