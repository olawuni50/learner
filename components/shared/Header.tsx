import Link from "next/link"
import Image from 'next/image'
import { Button } from "../ui/button"
import SideBars from "./SideBars"
import NavItems from "./NavItems"

const Header = () =>{
    return(
        <header className="w-full border-b">
            <div className="wrapper flex items-center justify-between">

                <Link href="/" className="w-36 text-3xl font-bold">Learner
                {/* <Image src="/assets/images/logo.svg" alt="Learner Logo" width={128} height={38} /> */}
                </Link>

                <div className="hidden md:block">
                <NavItems  />
                </div>

                <div className="flex w-32 justify-end gap-3">
                    <Button className="rounded-xl bg-blue-500" size="lg">Login</Button>
                </div>

                <SideBars />

                </div>

        </header>
    )
}

export default Header