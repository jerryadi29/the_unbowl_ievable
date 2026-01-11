import React from 'react'

export default function CategoryCard({ category }) {

    const { id, img, name,description } = category

    return (
        <div className="categoryCardContainer flex flex-col items-center bg-white rounded-2xl shadow-2xl p-5 w-80  hover:shadow-lg transition cursor-pointer">
            <img
                className="categoryCardImg w-full h-48 object-cover rounded-lg mb-3"
                src={img}
                alt={name}
            />
            <h4 className="categoryCardTitle text-center text-lg font-bold">
                {name}
            </h4>

            <p className='categoryCardDescription text-center text-sm'>{description}</p>
        </div>
    )
}
