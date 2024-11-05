import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { z } from "zod";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


// Dealing with local storage
export async function getCampusInLocalStorage() {
  const value = localStorage.getItem('campus');
  return value
}

export async function saveCampusInLocalStorage( campus: string ) {
  localStorage.setItem('campus', campus)
  const value = localStorage.getItem('campus');
  return value
}

export async function delCampusInLocalStorage( campus: string ) {
  localStorage.removeItem('campus')
  const value = localStorage.getItem('campus');
  return value
}

export const parseStringify = (value: any) => JSON.parse(JSON.stringify(value));

export const formatDate = (isoString: string): string => {
  const date = new Date(isoString);
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
  return date.toLocaleDateString(undefined, options);
};


export const authFormSchema = (type: string) => z.object({
  // sign up & update
  username: type === 'sign-up' || type === 'update' ? z.string().min(2, 'Username must contain at least 2 character(s)').max(50) : z.string().optional(),
  
  phone: type === 'sign-up' || type === 'update' ? z.string().min(2, "Enter a valid phone number!") : z.string().optional(),
  
  confirmPassword: type === 'sign-up' ? z.string().min(8) : z.string().optional(),
  
  acceptTerms: type === 'sign-up' ? z.boolean() : z.boolean().optional(),
  
  // sign in & sign up & update
  email: z.string().min(2, "Enter a valid email!").email(),
  
  password: type === 'update' ? z.string().optional() : z.string().min(8, "Password must contain at least 8 character(s)"),
});