import {
    Sheet,
    SheetContent,
    SheetTrigger,
  } from "@/components/ui/sheet"
import Image from 'next/image'  
import { HiMenuAlt3 } from "react-icons/hi";
import { Separator } from "@/components/ui/separator"
import NavItems from "./NavItems";




const SideBars = () =>{
    return(
        <nav className="md:hidden">
        <Sheet>
  <SheetTrigger className="align-middle text-3xl"> <HiMenuAlt3 /> </SheetTrigger>
  <SheetContent className="flex flex-col gap-6 bg-white md:hidden">
    {/* <Image src="/assests/images/logo.svg" alt="logo" width={128} height={38} /> */}
        
    <Separator className="border border-gray-50" />

    <NavItems />

  </SheetContent>
</Sheet>
</nav>
    )
}

export default SideBars