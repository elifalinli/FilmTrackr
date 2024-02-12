'use client'
import * as React from "react"
import { useState, useEffect } from "react"

import { cn } from "@/lib/utils"
import { useSearchParams, usePathname, useRouter} from "next/navigation"
import {useDebounce} from 'use-debounce'

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  const searchParams = useSearchParams()
  const pathname = usePathname();
  const { replace } = useRouter();

  function handleSearch(term) {
    const params = new URLSearchParams(searchParams)
    if (term) {
      params.set('query', term);
    } else {
      params.delete('query');
    }
    replace(`${pathname}?${params.toString()}`);

  }

  return (
    (<input
      type={type}
      className={cn(
        "tw-flex tw-h-9 tw-w-full tw-rounded-md tw-border tw-border-input tw-bg-transparent tw-px-3 tw-py-1 tw-text-sm tw-shadow-sm tw-transition-colors file:tw-border-0 file:tw-bg-transparent file:tw-text-sm file:tw-font-medium placeholder:tw-text-muted-foreground focus-visible:tw-outline-none focus-visible:tw-ring-1 focus-visible:tw-ring-ring disabled:tw-cursor-not-allowed disabled:tw-opacity-50",
        className
      )}
      ref={ref}
      {...props}
    
      onChange={(e) => {
        handleSearch(e.target.value)
      }}
      defaultValue={searchParams.get('query')?.toString()} />)
  );
})
Input.displayName = "Input"

export { Input }
