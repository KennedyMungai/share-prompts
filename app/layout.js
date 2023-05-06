import './globals.css'

export const metadata = {
	title: 'Promptopia',
	description: 'An app for some AI prompts'
}

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body>{children}</body>
		</html>
	)
}
