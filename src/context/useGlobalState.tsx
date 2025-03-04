import { GlobalStateContext } from "./GlobalStateContext"
import { useContext } from "react"

export function useGlobalState() {
    return useContext(GlobalStateContext)!
}