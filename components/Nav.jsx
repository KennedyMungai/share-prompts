'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { signIn, signOut, useSession, getProviders } from 'next-auth/react'

const Nav = () => {
	return (
		<nav className='flex-between w-full mb-16 pt-3'>
			<Link href={'/'} className='flex gap-2 flex-center'>
				<Image
					src={'/assets/images/logo.svg'}
					width={'40'}
					height={'40'}
					alt='The Page logo'
				/>
			</Link>
		</nav>
	)
}

export default Nav
