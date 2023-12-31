"use client"
import Link from "next/link"
import Image from 'next/image'
import { Button } from "../ui/button"
import SideBars from "./SideBars"
import NavItems from "./NavItems"
import {signIn, useSession, signOut} from 'next-auth/react'

const Header = () =>{

    const {status, data:session} = useSession({required:true, onUnauthenticated(){
    }})

    // Sign In
    const signinHandler = async () =>{
        try{
          await signIn();
        }catch(error){
          console.log('SIGN IN ERROR', error)    
        }
      }

      // Sign Out
      const signoutHandler = async () =>{
        try{
          await signOut();
        }catch(error){
          console.log('SIGN out ERROR', error)    
        }
      }

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
                    {session ? (
                       <div className="flex justify-between items-center">
                        <Button className="rounded-xl bg-blue-500" size="lg"
                         onClick={signoutHandler}>LogOut</Button>
                         <Image src={session?.user?.image} width={28} height={30} className="object-contain rounded-full" />
                         </div>

                    ): (
                        <Button className="rounded-xl bg-blue-500" size="lg" 
                        onClick={signinHandler}>Signup/Login</Button>

                    )}
                </div>

                <SideBars />

                </div>

        </header>
    )
}

export default Header