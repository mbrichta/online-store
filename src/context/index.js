import React, { createContext, useState, useEffect } from 'react'

const Context = createContext()

function ContextProvider({ children }) {

    const [photos, setPhotos] = useState([])
    const [cartItems, setCartItems] = useState([])

    const urlOne = 'https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json'
    const urlTwo = 'https://jsonplaceholder.typicode.com/posts'

    useEffect(async () => {
        const [promisePhotos, promisePosts] = await Promise.all([
            fetch(urlOne), fetch(urlTwo)
        ])

        const gitHubPhotos = await promisePhotos.json()
        const jsonPosts = await promisePosts.json()

        const processedData = gitHubPhotos.map((photo, i) => (
            photo = {
                ...photo,
                title: jsonPosts[i].title,
                description: jsonPosts[i].body,
                price: Math.floor(Math.random() * 15) + 1
            }
        ))

        setPhotos(processedData)
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