import { A } from "@solidjs/router";
import SearchIcon from "../icons/search";
import StreakIcon from "../icons/streak";

export default function Topbar() {
	return (
		<div class="flex items-center w-full px-5 py-2 border-b border-zinc-700">
			<div class="inline-flex justify-start items-center w-1/2">
				<A href="/" class="my-5 text-xl text-white font-bold">weekly.dev</A>
			</div>
			<div class="inline-flex justify-center items-center shrink-0">
				<div class="inline-flex ps-3 py-4 me-40 bg-zinc-800 text-white rounded-2xl">
					<SearchIcon />
					<input type="text" name="search" placeholder="Search" class="inline-flex w-full h-full text-2xl focus:outline-none" />
				</div>
			</div>
			<div class="inline-flex justify-end items-center w-1/2">
				<button class="p-3 bg-zinc-800 rounded-xl">
					<StreakIcon />
				</button>
			</div>
		</div>
	);
}
