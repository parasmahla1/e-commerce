import { ReactNode } from "react"
import { CartProvider as UCProvider } from "use-shopping-cart"



export default function CartProvider ({children}: {children  : ReactNode}) {

    return (
        <UCProvider mode="payment" cartMode="client-only" stripe={process.env.NEXT_PUBLIC_STRIPE_KEY as string} successUrl="asd" >
            {children}
        </UCProvider>
    )
} 