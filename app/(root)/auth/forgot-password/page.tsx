"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form
} from "@/components/ui/form"
import CustomFormField from "@/components/auth/CustomFormField"
import { useState } from "react"
import { InputOTPForm } from "@/components/auth/InputOTPForm"

const formSchema = z.object({
  phone: z.string().min(2,"Enter a valid phone number").max(15),
})

const ForgotPassword = () => {
  const [ phone, setPhone ] = useState("");
  const [ validUser, setValidUser ] = useState("")

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      phone: "",
    },
  })
 
  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    setPhone(values.phone)
    console.log(values)
  }

  return (
    <div className={`py-12 px-7 shadow-md`}>
      {phone && validUser ? (
        <InputOTPForm phone={phone} userId={validUser}/>
      ): (
        <div>
          <h5 className='text-center'>Please enter your registered mobile number</h5>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5 pt-5">
              <CustomFormField 
                form={form} 
                label=''
                name="phone" 
                inputType='phone'
              />
              <Button type="submit" className='w-full'>Next</Button>
            </form>
          </Form>
        </div>
      )}
      
    </div>
  )
}

export default ForgotPassword