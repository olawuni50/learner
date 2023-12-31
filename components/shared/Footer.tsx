import Link from "next/link"
import Image from 'next/image'


const Footer = () =>{
    return(
        <footer className="border-t">
            <div className="flex-center wrapper flex-between flex flex-col gap-4 p-5 text-center sm:flex-row">
                <Link href="/" className="font-bold">
                    Learner
                </Link>
                <p>2024 Learner. All Rights researved</p>
            </div>
        </footer>

    )
}

export default Footer