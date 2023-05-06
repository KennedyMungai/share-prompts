'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { signIn, signOut, useSession, getProviders } from 'next-auth/react'

const Nav = () => {
	const isUserLoggedIn = true

	return (
		<nav className='flex-between w-full mb-16 pt-3'>
			<Link href={'/'} className='flex gap-2 flex-center'>
				<Image
					src={'/assets/images/logo.svg'}
					width={'30'}
					height={'30'}
					alt='The Page logo'
					className='object-contain'
				/>
				<p className='logo_text'>Promptopia</p>
			</Link>

			{/* Desktop Navigation */}
			<div className='sm:flex hidden'>
				{isUserLoggedIn ? (
					<div className='flex gap-3 md:gap-5'>
						<Link href={'/create-prompt'} className='black_btn'>
							Create Prompt
						</Link>
						<button
							type='button'
							onClick={signOut}
							className='outline_btn'
						>
							Sign Out
						</button>
						<Link href={'/profile'}>
							{/* <Image
								src={'/assets/images/profile.svg'}
								width={30}
								height={30}
								alt='user'
								className='object-contain'
							/> */}
						</Link>
					</div>
				) : (
					<div></div>
				)}
			</div>
		</nav>
	)
}

export default Nav
