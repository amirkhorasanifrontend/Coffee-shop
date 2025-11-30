import React, { useState } from 'react'
import Product from '../Product/Product'

export default function ItemsBox() {

    const [allProducts, setAllProducts] = useState ([
        {id: 1,src:"public/item4.png",price: "52", title:"Bold Blend",text:"High Caffeine . Full-Boded . Energizing",status:"early starts, workouts, deep work sessions"},
        {id: 2,src:"public/IMG_20251125_232833.png",price: "47", title:"Daily Belend",text:"High Caffeine . Full-Boded . Energizing",status:"early starts, workouts, deep work sessions"},
        {id: 3,src:"public/item3.png",price: "34", title:"Calm Blend",text:"High Caffeine . Full-Boded . Energizing",status:"early starts, workouts, deep work sessions"},
    ])

  return (
    <>
        <div>
            <div className='flex items-center justify-center'>
                {allProducts.map((product) => (
                    <div key={product.id}>
                        <Product {...product}/>
                    </div>
                ))}
            </div>
        </div>
    </>
  )
}
