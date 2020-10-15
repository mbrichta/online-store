import React, { useContext } from 'react'
import { Context } from '../context'
import Card from '../components/Card'

export default function Photos() {

    const { photos } = useContext(Context)

    return (
        <main className="container">
            <section className="cards">
                {photos.map(item => (
                    <Card key={item.id} item={item} />
                ))}
            </section>
        </main>
    )
}