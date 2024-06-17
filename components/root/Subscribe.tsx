"use client"
 import Image from 'next/image'
import React from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
 
const formSchema = z.object({
  email: z.string().min(2).email(),
})


const Subscribe = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  })
 
  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }

  return (
    <section className="w-full mb-0 mt-48 bg-primary/10 max-w-7xl mx-auto">
      <div className='relative flex flex-col md:flex-row items-center justify-end gap-10 p-6 text-center md:text-start max-w-7xl m-auto md:h-64'>
        <Image src="/subscribe.svg" width={250} height={250} alt='subscribe' className='absolute
         top-[-40%] md:top-[-40%] lg:top-[-50%] md:left-0 lg:left-10 w-[18rem] md:w-[25rem] lg:w-[27rem]'/>
        <div className='w-full h-[60px] md:hidden'/>
        <div className='space-y-3 md:w-[50%] md:pr-3 lg:pr-10'>
          <h3 className='text-xl font-semibold'>Join Us</h3>
          <p className='text-sm'>Subscribe to our newsletter and be part of our journey of transforming shopping experience.</p>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-full relative py-3">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Enter email" type='email' {...field} className='h-12 border border-primary ring-0' />
                    </FormControl>
                  </FormItem>
                )}
              />
              <Button type="submit" size="sm" className='absolute top-[16px] right-1.5'>Subscribe</Button>
            </form>
          </Form>
        </div>        
      </div>      
    </section>
  )
}

export default Subscribe