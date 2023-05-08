import User from '@/models/user'
import { connectToDB } from '@/utils/database'
import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'

const handler = NextAuth({
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_ID,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET
		})
	],
	async session({ session }) {},
	async signIn({ profile }) {
		try {
			await connectToDB()

			// Check if a user already exists

			// If not, create a new user and save it to the database

			return true
		} catch (error) {
			console.log(error)
			return false
		}
	}
})

export { handler as GET, handler as POST }
