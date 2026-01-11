import React from 'react'
import NavBar from '../components/layout/NavBar'
import homepage_veggie from '../assets/images/homepage_veggie.jpg';
import Button from '../components/ui/Button';
import { useNavigate } from "react-router-dom"
import { category } from '../data/categories';
import CategoryCard from '../components/features/CategoryCard';
import { product } from '../data/product';
import ProductCard from '../components/features/ProductCard';
import SubscriptionCard from '../components/features/SubscriptionCard';

export default function Home() {
  const navigate = useNavigate()

 
  return (
    <>
     <NavBar></NavBar>
       <div className='relative flex flex-col justify-start items-center gap-y-[8rem]'>
     
      <section className='exploreMenu w-3/4 relative top-20  flex flex-row justify-around'>
        <img className='exploreMenuBImg rounded-full opacity-75 blur-[0.8px]' src={homepage_veggie} alt='homepage-background' />
        <p className='absolute top-1/4  text-white font-mono text-5xl max-w-min font-bold'>Freshness Delivered everyday</p>
        <Button className='exploreMenuBtn absolute top-3/4 shadow-xl  hover:w-30 transition' onClick={() => navigate('/menu')}>Explore Menu</Button>
      </section>

      <section className='selectCategory'>
       <h3 className='text-center text-4xl font-bold mb-6'>Choose Your Category</h3>
       <div className='grid grid-cols-3 gap-20 rounded-xl'>

        {category && category.map(ele=>{
          return <CategoryCard category={ele}/>
        })}

       </div>
      </section>


       <section className='selectProduct'>
       <h3 className='text-center text-4xl font-bold mb-6'>Our Most Loved ❤️</h3>
       <div className='grid grid-cols-3 gap-20 rounded-xl'>

        {product && product.map(ele=>{
          return <ProductCard product={ele}/>
        })}

       </div>
      </section>

      <section>
        <SubscriptionCard></SubscriptionCard>

      </section>
    </div>
    </>
  
  )
}
