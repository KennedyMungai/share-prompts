import '@/app/globals.css'
import Feed from '@/components/Feed'

const Home = () => {
	return (
		<section className='w-full flex-center flex-col'>
			<h1 className='head_text text-center'>
				Discover & Share
				<br className='max-md:hidden' />
				<span className='orange_gradient text-center'>
					AI Powered Prompts
				</span>
			</h1>
			<p className='desc text-center'>
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero
				voluptatibus ullam amet praesentium ratione soluta iure incidunt
				culpa nemo sit nulla deleniti, ea esse mollitia voluptatum nam
				autem obcaecati sint nihil quas quidem cupiditate. Recusandae
				eaque quas, tenetur quos beatae fuga tempora et, sit id neque
				eos perferendis, mollitia a.
			</p>

			<Feed />
		</section>
	)
}

export default Home
