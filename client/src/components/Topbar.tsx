import { A } from "@solidjs/router";
import SearchIcon from '../icons/search';

export default function Topbar() {
	return (
		<div class="flex items-center w-full min-h-16 px-5 py-2 border-b border-zinc-700">
			<div class="inline-flex justify-start items-center w-1/2">
				<A href="/" class="my-5 text-xl text-white font-bold">weekly.dev</A>
			</div>
			<div class="inline-flex items-center shrink-0">
				<div class="inline-flex ps-3 py-4 me-40 bg-zinc-800 text-white rounded-2xl">
					<SearchIcon />
					<input type="text" name="search" placeholder="Search" class="inline-flex w-full h-full text-2xl focus:outline-none" />
				</div>
			</div>
			<div class="inline-flex justify-end items-center w-1/2">
				<button class="p-3 bg-zinc-800 rounded-xl">
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="" viewBox="0 0 24 24">
						<path d="M12 24c4.971 0 9-3 9-8.25 0-2.25-.75-6-3.75-9 .375 2.25-1.875 3-1.875 3C16.5 6 13.5.75 9 0c.536 3 .75 6-3 9C4.125 10.5 3 12.394 3 14.25 3 21 7.029 24 12 24m0-1.5c-2.486 0-4.5-1.5-4.5-4.125 0-1.125.375-3 1.875-4.5.188 1.688 1.687 2.531 1.687 2.531-.563-1.875.75-4.875 3-5.25-.268 1.5-.375 3 1.5 4.5.938.75 1.5 2.046 1.5 3.375 0 2.625-2.014 4.469-4.5 4.469"/>
					</svg>
				</button>
			</div>
		</div>
	);
}
