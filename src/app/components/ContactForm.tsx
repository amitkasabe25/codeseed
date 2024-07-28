import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from "@/components/ui/textarea"

import React from 'react'

const ContactForm = () => {
  return (
    <>
    <form className='border border-1 border-slate-200 p-5 rounded-sm'>
    <h3 className='text-center text-2xl font-bold'>Want to Ask Something ?</h3>
    <Input type="email" placeholder="Your Name" className='mt-3' />
    <Input type="email" placeholder="Phone Number" className='mt-3' />
    <Input type="email" placeholder="Email" className='mt-3' />
    <Textarea placeholder="Type your message here." className='mt-3' />
    <Button className='mt-4 w-full'>Send Enquiry</Button>
    </form>
    </>
  )
}

export default ContactForm