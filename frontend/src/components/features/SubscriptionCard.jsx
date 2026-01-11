import React from 'react'
import Button from '../ui/Button'

export default function SubscriptionCard() {
  return (
    <div className='subscriptionCardContainer  bg-gray-900 rounded-md flex flex-row flex-wrap items-center justify-center content-around min-h-[140px]'>
      <div className='subscriptionCardLeft flex flex-col flex-wrap items-center justify-center max-w-[70%] content-start'>
        <h4 className='subscriptionHeader text-h3 text-brand-500  font-bold pb-[20px]'>Never Miss a Meal</h4>
        <p className='subscriptionText text-body-sm text-brand-50 font-Shadows font-medium text-balance'>Subscribe to our weekly plan and get fresh, delicious salads delivered right to your door. Save time, eat healthy, and enjoy exclusive perks.</p>
      </div>

      <Button rounded={'md'} fontColor='text-brand-10' bold={`font-medium`}> Subscribe Now </Button>

    </div>
  )
}
