import Nav from '@/components/Nav'
import './globals.css'

export const metadata = {
	title: 'Promptopia',
	description: 'An app for some AI prompts'
}

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body>
				<Provider>
					<div className='main'>
						<div className='gradient' />
					</div>
					<main className='app'>
						<Nav />
						{children}
					</main>
				</Provider>
			</body>
		</html>
	)
}
