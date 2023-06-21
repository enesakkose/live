import React, { useState } from "react"
import { useDebounce } from "react-use"

export const useDebounceValue = (value: string, delay: number) => {
    const [ debouncedValue, setDebouncedValue ] = useState('')

    useDebounce(() => { setDebouncedValue(value) }, delay, [value])

    return debouncedValue
}