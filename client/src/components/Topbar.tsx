import { A } from '@solidjs/router';
import SearchIcon from '../icons/search';
import StreakIcon from '../icons/streak';

export default function Topbar() {
	return (
		<nav class='sticky navbar top-0 px-5 py-2 border-b border-zinc-700'>
			<div class='navbar-start'>
				<A href='/' class='my-5 text-xl text-white font-bold'>
					weekly.dev
				</A>
			</div>
			<div class='navbar-center'>
				<div class='inline-flex items-center ps-3 py-4 bg-zinc-800 text-white rounded-2xl'>
					<SearchIcon />
					<input
						id='search-bar'
						type='text'
						name='search'
						placeholder='Search'
						class='inline-flex w-full h-full text-2xl focus:outline-none'
					/>
					<div class='inline-flex px-3'>
						<div class='kbd kbd-lg'>Ctrl</div>+<div class='kbd kbd-lg'>K</div>
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
