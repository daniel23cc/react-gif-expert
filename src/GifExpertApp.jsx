
import React, { useState } from 'react'
import { AddCategory, GifGrid } from './components'

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Steins Gate'])
    //console.log(categories)

    const onAddCategory = (newCategory) => {
        //console.log(newCategory)
        //categories.push(newCategory)
        if (categories.includes(newCategory)) return
        setCategories([newCategory, ...categories])
        //setCategories(cat=>[...cat,'Seins;Gate'])
    }

    return (
        <>
   
            <h3>App Buscador de gifs</h3>
            <h2>Creada por Daniel Carrasco</h2>

 
            <AddCategory
                onNewCategory={(value) =>onAddCategory(value)}
 
            />

            {
                categories.map((category) => (
                    //return (<li key={i}>{category}</li>)
                    <GifGrid
                        key={category}
                        category={category}
                    />
                ))
            }

            {/*Gif de Item*/}

        </>
    )
}
