"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import CustomFormField from "./CustomFormField";
import Link from "next/link";
import { authFormSchema } from "@/lib/utils";
import { signIn, signUp } from "@/lib/actions/auth.actions";
import { useRouter } from "next/navigation";
import { toast } from "../ui/use-toast";
import { Loader } from "lucide-react";


const AuthForm = ({ ...auth }) => {

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const formSchema = authFormSchema(auth.type);

  const router = useRouter()

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
      acceptTerms: false
    },
  });

  const onSubmit = async (values: AuthValues) => {

    setLoading(true);
    setMessage('');

    const { username, email, phone, password, confirmPassword, acceptTerms } = values;

    if (auth.page === "sign-up") {
      if (password !== confirmPassword) {
        toast({
          variant: "destructive",
          description: "Password do not match!",
        })
        setLoading(false);
        return;
      }
      if (!acceptTerms) {
        toast({
          variant: "destructive",
          description: "You must accept the terms and conditions!",
        })
        setLoading(false);
        return;
      }
      try {
        const response = await signUp({username, email, phone, password});
        if (response.error) {
          toast({
            variant: "destructive",
            description: response.error,
          })
        } else {
          toast({
            description: response.message,
          })
          router.push('/auth/sign-in?redirect_url=/profile')
        }
      } catch (error) {
        toast({
          variant: "destructive",
          description: "An unexpected error occurred.",
        })
      } finally {
        setLoading(false);
      }
    }

    if (auth.page === "sign-in") {
      try {
        const response = await signIn(email, password);
        if (response.error) {
          toast({
            variant: "destructive",
            description: response.error,
          })
        } else {
          toast({
            description: response.message,
          })
          if(auth.redirect_url){
            router.push(auth.redirect_url)
          } else {
            router.push('/')
          }
          
        }
      } catch (error) {
        toast({
          variant: "destructive",
          description: "An unexpected error occurred.",
        })
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="py-12 px-2 md:px-7">
      <div className='shadow-md md:w-[600px] m-auto p-5 md:p-10 bg-muted/20 rounded-xl'>
          <h1 className="text-center font-extrabold text-lg uppercase p-2">
            {auth.page.replace("-", " ")}
          </h1>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
              {auth.page === "sign-up" ? (
                <>
                  <CustomFormField 
                    form={form} 
                    label='Username'
                    name="username" 
                    placeholder="Enter username"
                    inputType='text'
                  />
                  <CustomFormField 
                    form={form} 
                    label='Phone'
                    name="phone" 
                    inputType='phone'
                  />
                  <CustomFormField 
                    form={form} 
                    label='Email'
                    name="email" 
                    placeholder="Email"
                    inputType='text'
                  />
                  <CustomFormField 
                    form={form} 
                    label='Password'
                    name="password" 
                    placeholder="Password"
                    type="password"
                    inputType='text'
                  />
                  <CustomFormField 
                    form={form} 
                    label='Confirm Password'
                    name="confirmPassword" 
                    placeholder="Confirm Password"
                    type="password"
                    inputType='text'
                  />
                  <CustomFormField 
                    form={form} 
                    name="acceptTerms" 
                    type="checkbox"
                    inputType='checkbox'
                  />
                </>              
              ) : (
                <>
                  <CustomFormField 
                    form={form} 
                    label='Email'
                    name="email" 
                    placeholder="Email"
                    inputType='text'
                  />
                  <CustomFormField
                    form={form}
                    label="Password"
                    name="password"
                    placeholder="Enter password"
                    type="password"
                    inputType="text"
                  />
                  <Link href="/auth/forgot-password" className="w-full flex justify-end">
                    <p className="text-sm hover:text-primary hover:underline">Forgot password?</p>
                  </Link>
                </>
              )}
              
                {loading ? (
                  <Button type="submit" className={`w-full`} disabled>
                    <Loader className='animate-spin'/>
                  </Button>
                ):(
                  <Button type="submit" className={`w-full`}>
                    {auth.page === "sign-up" ? "Sign Up" : "Sign In"}
                  </Button>
                )}

              {auth.page === "sign-up" ? (
                <p>
                  Already have an account? <Link href="/auth/sign-in" className="text-primary underline">Sign In</Link>
                </p>
              ) : (
                <p>
                  Don&apos;t have an account? <Link href="/auth/sign-up" className="text-primary underline">Sign Up</Link>
                </p>
              )}
            </form>
          </Form>
        </div>
    </div>
  );
};

export default AuthForm;
