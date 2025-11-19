import { createContext } from "react";


type Todo = {
    id: string,
    item: string
}

const ProductContext = createContext<undefined>(undefined)