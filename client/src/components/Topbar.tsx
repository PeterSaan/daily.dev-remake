import { A } from '@solidjs/router';
import SearchIcon from '../icons/search';
import StreakIcon from '../icons/streak';

export default function Topbar() {
	return (
		<nav class='sticky navbar top-0 px-5 py-1 border-b border-zinc-700'>
			<div class='navbar-start'>
				<A href='/' class='my-4 text-white font-bold'>
					daily.dev
				</A>
			</div>
			<div class='navbar-center'>
				<div class='inline-flex items-center ps-2 py-3 bg-zinc-800 text-white rounded-2xl'>
					<SearchIcon />
					<input
						id='search-bar'
						type='text'
						name='search'
						placeholder='Search'
						class='inline-flex w-full h-full text-lg focus:outline-none'
					/>
					<div class='inline-flex px-3'>
						<div class='kbd'>Ctrl</div>+<div class='kbd'>K</div>
					</div>
				</div>
			</div>
			<div class='navbar-end'>
				<button class='p-3 bg-zinc-800 rounded-xl'>
					<StreakIcon />
				</button>
			</div>
		</nav>
	);
}
