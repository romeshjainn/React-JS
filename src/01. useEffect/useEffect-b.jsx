import React from "react"
import { useEffect } from "react"
import { useState } from "react"

export const UseEffectB = () => {
    // const [counter, setCounter] = useState(0)
    
    useEffect(() => {
        console.log("i am effect")
        return () => {
            console.log("i am cleanup")
        }
    },[])

}