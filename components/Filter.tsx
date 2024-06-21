"use client"
import { Check, ChevronsUpDown } from "lucide-react" 
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { useState } from 'react'

type filterProp = {
  value: string,
  label: string
}

const Filter = ({filters}: {filters: filterProp[]}) => {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState("")
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          size='sm'
          aria-expanded={open}
          className="w-[100px] md:w-[200px] justify-between items-center border-2 border-primary"
        >
          <span className="truncate">
            {
              value ?
              filters.find((filter) => filter.value === value)?.label
              : "All Transactions"}
          </span>
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandList>
            <CommandEmpty>No filter found.</CommandEmpty>
            <CommandGroup>
              {filters.map((filter) => (
                <CommandItem
                  key={filter.value}
                  value={filter.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue)
                    setOpen(false)
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === filter.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {filter.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}

export default Filter