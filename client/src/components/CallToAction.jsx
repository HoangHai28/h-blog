import { Button } from 'flowbite-react'
import React from 'react'

export default function CallToAction() {
  return (
    <div className='flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center'>
        <div className='flex-1 justify-center flex flex-col'>
            <h2 className='text-2xl'>
                Want to learn more about JavaScript
            </h2>
            <p className='text-gray-500 my-2'>
                Checkout these resources with 100 JavaScript Projects
            </p>
            <Button gradientDuoTone='purpleToPink' className='rounded-tl-xl rounded-bl-none'>
                <a href='' target='_blank' rel='noopener noreferrer'>Learn More</a>
            </Button>
        </div>
        <div className='p-7 flex-1'>
            <img src='data:image/png;base64,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'></img>
        </div>
    </div>
  )
}