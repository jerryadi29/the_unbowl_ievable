import React from 'react'
import { getReviews } from '../../utils/productUtils';

export default function ProductCard({ product }) {

    const { id, img, name, description,rating } = product;


  

    return (
        <div>
            <div className="productCardContainer flex flex-col items-center bg-white rounded-2xl shadow-2xl p-5 w-80  hover:shadow-lg transition cursor-pointer">
                <img
                    className="productCardImg w-full h-48 object-cover rounded-lg mb-3"
                    src={img}
                    alt={name}
                />
                <h4 className="productCardTitle text-center text-lg font-bold">
                    {name}
                </h4>

                <div className='productRatingWrapper flex flex-row'>

                    {getReviews(rating)?.map(rating=>{
                        return (<>{rating}</>)
                    })} 

                    
                   <p class="ms-2 text-sm font-medium text-body">{rating} out of 5</p>
                </div>

                <p className='productCardDescription text-center text-sm '>{description}</p>
            </div>
        </div>
    )
}
