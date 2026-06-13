import { ReactNode } from "react"

type Props = {
    children: ReactNode
}


export const Card =  ({ children }:Props) => {
    return(
        <div className="text-center border-2 border-red-600 p-3">
            {children}
        </div>
    )
}