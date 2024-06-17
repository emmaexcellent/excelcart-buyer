"use client"

import { zodResolver } from "@hookform/resolvers/zod";
import { Check, ChevronsUpDown, Loader, Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useEffect, useState } from "react";
import { cn, saveCampusInLocalStorage, getCampusInLocalStorage } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import CategoryPopup from "../CategoryPopup";

interface CampusProps {
  $id: string;
  name: string;
}

const FormSchema = z.object({
  campus: z.string({
    required_error: "Please select a campus.",
  }),
});

interface SelectCampusFormProps {
  campusList: CampusProps[];
}

const SelectCampusForm: React.FC<SelectCampusFormProps> = ({ campusList }) => {
  const [open, setOpen] = useState(false);
  const [campus, setCampus] = useState<string | null>(null);
  const [categoryPopup, setCategoryPopup] = useState(false);
  const [loading, setLoading] = useState(true);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      campus: "",
    },
  });

  useEffect(() => {
    const fetchSavedCampus = async () => {
      const campusData = await getCampusInLocalStorage();
      if (campusData) {
        setCampus(campusData);
        form.setValue("campus", campusData);
      }
      setLoading(false);
    };
    fetchSavedCampus();
    setCategoryPopup(true);
  }, []);  

  const onSubmit = async (data: z.infer<typeof FormSchema>) => {
    const savedCampus = await saveCampusInLocalStorage(data.campus);
    setCampus(savedCampus);
    setCategoryPopup(true);
  };

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="max-w-full flex gap-0 bg-primary p-1 rounded-lg my-5">
          <FormField
            control={form.control}
            name="campus"
            render={({ field }) => (
              <FormItem className="w-[80%]">
                <Popover open={open} onOpenChange={setOpen}>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant="outline"
                        role="combobox"
                        className={cn(
                          "relative text-nowrap truncate w-full justify-between h-10 rounded-r-none text-bg--foreground",
                          !field.value && "w-full"
                        )}
                      >
                        {field.value && campusList
                          ? campusList && campusList.find((campus) => campus.$id === field.value)?.name
                          : campus
                          ? campusList && campusList.find((camp) => camp.$id === campus)?.name
                          : "Select Campus"}
                        <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-full m-2">
                    <Command>
                      <CommandList>
                        <CommandInput placeholder="Search campus..." />
                        <CommandEmpty className="w-full flex flex-col items-center py-5">
                          {loading ? (
                            <>
                              <Loader className="animate-spin" /> Loading campuses...
                            </>
                          ) : (
                            <>No Campus found!</>
                          )}
                        </CommandEmpty>
                        <CommandGroup>
                          {campusList && campusList.map((camp) => (
                            <CommandItem
                              value={camp.$id}
                              key={camp.$id}
                              onSelect={() => {
                                form.setValue("campus", camp.$id);
                                setOpen(false);
                              }}
                            >
                              <Check
                                className={cn(
                                  "mr-2 h-4 w-4",
                                  camp.$id === field.value ? "opacity-100" : "opacity-0"
                                )}
                              />
                              {camp.name}
                            </CommandItem>
                          ))}
                        </CommandGroup>
                      </CommandList>
                    </Command>
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="rounded-l-none text-primary font-semibold w-[20%]" variant="outline">
            {loading ? <Loader2 className="animate-spin" /> : <span className="hidden sm:block">Explore</span>}
            {!loading && (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" className="h-5 w-5">
                <path d="M17.5 11.667v-5h-5"></path>
                <path d="m17.5 6.667-7.5 7.5-7.5-7.5"></path>
              </svg>
            )}
          </Button>
        </form>
      </Form>
      {campusList && (
        categoryPopup && (
          <CategoryPopup
          campus={campusList.find((camp) => camp.$id === campus)?.name || ""}
            categoryPopup={categoryPopup}
            setCategoryPopup={setCategoryPopup}
          />
        )
      )}
    </>
  );
};

export default SelectCampusForm;
