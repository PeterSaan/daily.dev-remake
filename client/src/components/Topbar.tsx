import { A } from "@solidjs/router";

export default function Topbar() {
	return (
		<div class="flex justify-between px-6 py-7 border-b border-zinc-800">
			<div>
				<A href="/" class="text-xl text-white font-bold">weekly.dev</A>
			</div>
			<div>
				<input type="text" name="search" placeholder="Search" class="bg-transparent rounded-full" />
			</div>
			<div>
			</div>
		</div>
	);
}
