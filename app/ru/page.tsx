import { HeroRu } from "@/components/HeroRu/HeroRu"
import { Metadata } from "next"

export const metadata: Metadata = {
    title:"НОТАРИУС Симонова Виктория",
    description:"нотариус симонова виктория валериевна"
}

export default function Ru() {
    return (
        <HeroRu/>
    )
}