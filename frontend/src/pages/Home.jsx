import React from 'react'
import NavBar from '../components/NavBar'
import homepage_veggie from '../assets/images/homepage_veggie.jpg';
import Button from '../components/Button';
import { useNavigate } from "react-router-dom"

export default function Home() {
  const navigate = useNavigate()
  return (
    <div className='relative flex flex-col justify-start items-center'>
      <NavBar></NavBar>
      <section className='w-3/4 relative top-20  flex flex-row justify-around'>
        <img className='rounded-full opacity-75 blur-[0.8px]' src={homepage_veggie} alt='homepage-background' />
        <p className='absolute top-1/4  text-white font-mono text-5xl max-w-min font-bold'>Freshness Delivered everyday</p>
        <Button className='absolute top-3/4 shadow-xl' onClick={() => navigate('/menu')}>Explore Menu</Button>

      </section>
    </div>
  )
}
