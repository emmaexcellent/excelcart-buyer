"use client"
import { z } from "zod"
import { Form } from "../ui/form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "../ui/button"
import { Loader } from "lucide-react"
import { Dispatch, SetStateAction, useState } from "react"
import { useRouter } from 'next/navigation'
import { toast } from '../ui/use-toast'
import { DialogClose, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog"
import CustomFormField from "./CustomFormField"
import { updateDetails } from "@/lib/actions/auth.actions"

const formSchema = z.object({
  password: z.string().min(2, "Password must be at least 2 characters long").max(50, "Password cannot exceed 50 characters"),
});

const PasswordInputAlert = ({ setPassword, profileDetailsSubmitted, setOpenPasswordDialog }: {setPassword: Dispatch<SetStateAction<string>>, profileDetailsSubmitted: { username:string, email: string, phone: string}, setOpenPasswordDialog: Dispatch<SetStateAction<boolean>>}) => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      password: "",
    },
  });

  const onSubmit = async ({password}: {password: string}) => {
    setLoading(true);
    setPassword(password);
    const {username, email, phone} = profileDetailsSubmitted;
    
    try {
      const response = await updateDetails(username, email, phone, password);
      if (response.error) {
        toast({
          variant: "destructive",
          description: response.error,
        })
      } else {
        toast({
          description: response.message,
        })
        router.refresh()
      }
    } catch (error) {
      toast({
        variant: "destructive",
        description: "An unexpected error occurred.",
      })
    } finally {
      setLoading(false);
      setOpenPasswordDialog(false)
    }   
    
  };

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Enter your password to confirm</DialogTitle>
      </DialogHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <CustomFormField
            form={form}
            label='Password'
            name="password"
            placeholder="Password"
            type="password"
            inputType='text'
          />
          <div className='flex justify-end items-center gap-5'>
            <DialogClose asChild>
              <Button type="button" variant="secondary">
                Close
              </Button>
            </DialogClose>
            {loading ? (
              <Button type="button" className='cursor-progress w-32' disabled>
                <Loader className='animate-spin' />
              </Button>
            ) : (
              <Button type="submit" className='w-24'>
                Confirm
              </Button>
            )}
          </div>
        </form>
      </Form>
    </DialogContent>
  );
};

export default PasswordInputAlert;
