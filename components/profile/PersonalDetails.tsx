'use client'
import { useState } from 'react';
import { ArrowLeft, Edit, Loader } from 'lucide-react';
import { Button } from '../ui/button';
import MainSection from './MainSection';
import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { authFormSchema } from "@/lib/utils";
import CustomFormField from '../auth/CustomFormField';
import ImageInput from '../auth/ImageInput';
import { toast } from '../ui/use-toast';
import { useRouter } from 'next/navigation'
import { updateDetails } from "@/lib/actions/auth.actions"

import PasswordInputAlert from '../auth/PasswordInputAlert';

const PersonalDetails = ({ user }: LoggedInUserProps) => {
  const [editDetails, setEditDetails] = useState(false);
  const [ password, setPassword ] = useState('');
  const [updateProfileLoading, setUpdateProfileLoading] = useState(false);
  const [openPasswordDialog, setOpenPasswordDialog] = useState(false);
  const router = useRouter();

  const formSchema = authFormSchema('update');
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: user.name,
      email: user.email,
      phone: user.phone,
    },
  });

  const handleReset = () => {
    form.reset({
      username: user.name,
      email: user.email,
      phone: user.phone,
    });
  };

  const onSubmitDetails = async ({ email, username, phone }: { email: string, username: string, phone: string }) => {
    setUpdateProfileLoading(true);
    const errors = [];

    if (!email) errors.push("Email is required!");
    if (!username) errors.push("Username is required!");
    if (!phone) errors.push("Phone number is required!");

    if (errors.length) {
      errors.forEach(err => toast({ variant: "destructive", description: err }));
      setUpdateProfileLoading(false);
      return;
    }
    try {
      const response = await updateDetails(user.$id, username, email, phone);
      if (response.error) {
        toast({
          variant: "destructive",
          description: response.error,
        })
      } else {
        toast({
          description: response.message,
        })
      }
    } catch (error) {
      toast({
        variant: "destructive",
        description: "An unexpected error occurred.",
      })
    } finally {
      setUpdateProfileLoading(false);
      setEditDetails(false)
      router.refresh()
    }
  };

  return (
    <MainSection>
      {!editDetails ? (
        <div className='mx-5'>
          <div className='flex justify-between items-center lg:gap-16 p-2 pl-0'>
            <h6 className='font-semibold lg:text-lg'>Personal Details</h6>
            <Button variant='link' size='icon' className='border rounded-full lg:hidden' onClick={() => setEditDetails(true)}>
              <Edit />
            </Button>
            <Button className='hidden lg:inline-flex' onClick={() => setEditDetails(true)}>
              <Edit className="mr-2 h-4 w-4" /> Edit Profile
            </Button>
          </div>
          <div>
            <div className='text-sm lg:text-base space-y-3'>
              <p className='font-semibold flex'>
                <span>Username:</span>
                <span className='font-normal ml-3'>{user.name}</span>
              </p>
              <p className='font-semibold'>
                <span>Phone:</span>
                <span className='font-normal ml-9'>{user.phone}</span>
              </p>
              <p className='font-semibold flex'>
                <span>Email:</span>
                <span className='font-normal ml-11 truncate'>{user.email}</span>
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className='mx-5'>
          <div className='flex justify-between items-center lg:gap-16 p-2 pl-0'>
            <h6 className='font-semibold lg:text-lg'>Edit Personal Details</h6>
            <Button variant='link' onClick={() => setEditDetails(false)}>
              <ArrowLeft width={20} className='pr-1' /> Go Back
            </Button>
          </div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmitDetails)} className="space-y-5">
              <ImageInput />
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
              <div className='flex justify-end items-center gap-3'>
                <Button type="reset" className='bg-background border text-gray-500 hover:bg-background' onClick={handleReset}>
                  Reset
                </Button>
                {updateProfileLoading ? (
                  <Button type="button" className='cursor-progress w-32' disabled>
                    <Loader className='animate-spin' />
                  </Button>
                ) : (
                  <Button type="submit" className='w-24'>
                    Update
                  </Button>
                )}
              </div>
            </form>
          </Form>
        </div>
      )}
    </MainSection>
  );
};

export default PersonalDetails;
