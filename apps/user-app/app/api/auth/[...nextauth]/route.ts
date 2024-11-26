import NextAuth from "next-auth"
import { AuthOptions } from "next-auth"

const authOptions: AuthOptions = {
    providers: []
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }