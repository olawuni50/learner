import {NextAuthOptions} from 'next-auth'
import GitHub from 'next-auth/providers/github'
import Facebook from 'next-auth/providers/facebook'
import GoogleProvider from 'next-auth/providers/google'
import CredentialsProvider from 'next-auth/providers/credentials'
import {MongoClient} from 'mongodb'
import {MongoDBAdapter} from "@auth/mongodb-adapter"
import clientPromise from './mongodb'


export const authOptions: NextAuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
          }),
        //   CredentialsProvider({
        //     name: 'email and password',
        //     credentials: {
        //         email: {
        //             label: "Email",
        //             placeholder:'email@email.com',
        //             type:'email'
        //         },
        //         userName: {
        //             label: "User Name",
        //             placeholder:'user name',
        //             type:'string'
        //         },
        //         password:{
        //             label:'Password',
        //             placeholder:'Enter password',
        //             type:'password'
        //         }
        //     },

        //     async authorize(credentials, req){
        //         if(!credentials?.email || !credentials?.password){
        //             throw new Error("Please provide valid credentials")
        //         }

        //         const client = await MongoClient.connect(process.env.MONGODB_URI as string)

        //         const db = client.db();
        //         const user = await db.collection('users').findOne({email:credentials.email})

        //         if(user) {
        //             return user as any;
        //         }else {
        //             return null;
        //         }

        //     }

        //   })
    ],
    session: {
        strategy: 'jwt',
    },
    adapter: MongoDBAdapter(clientPromise),
    debug:process.env.NODE_ENV === 'development',
    secret: process.env.NEXTAUTH_SECRET
    // pages:{}
}