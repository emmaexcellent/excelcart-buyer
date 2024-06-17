import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { PhoneInput } from "../ui/phone-input";
import { Checkbox } from "@/components/ui/checkbox"
import { FieldValues } from "react-hook-form";
import Link from "next/link";

const CustomFormField = ({...props}) => {
  return (
    <FormField
      control={props.form.control}
      name={props.name}
      render={({ field: field }) => (
        <FormItem>
          <FormLabel>{props.label}</FormLabel>
          {props.inputType === 'text' && (
            <FormControl>
              <Input placeholder={props.placeholder} type={props.type === 'password'? 'password' : 'text'} {...field} />
            </FormControl>
          )}

          {props.inputType === 'phone' && (
            <FormControl>
              <PhoneInput
                international
                defaultCountry="NG"
                placeholder="Enter a phone number" {...field}
              />
            </FormControl>
          )}

          {props.inputType === 'checkbox' && (
            <div className="flex flex-row items-start space-x-3 space-y-0 ">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel>
                  You must accept the <Link href='/terms' className='text-primary'>terms & conditions</Link>
                </FormLabel>
              </div>
            </div>
          )}          
          
          <FormMessage />
        </FormItem>
      )}
    />
  )
}

export default CustomFormField