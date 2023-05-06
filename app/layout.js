import './globals.css'

export const metadata = {
	title: 'Promptopia',
	description: 'An app for some AI prompts'
}

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body>
				<div className='main'>
					<div className='gradient' />
				</div>
				<main className='app'>{children}</main>
			</body>
		</html>
	)
}
