import { A } from '@solidjs/router';

export default function Sidebar() {
	return (
		<aside class='flex w-fit'>
			<div class='flex flex-col p-5 h-[calc(100vh-64px)] overflow-y-auto border-e border-zinc-700'>
				<div class='inline-flex items-center'>
					<div class='text-xl text-zinc-500 font-semibold'>Menu</div>
					<div></div>
				</div>
				<button class='btn btn-info my-4 py-5'>
					<A href='' class='px-16 text-xl'>
						+ New post
					</A>
				</button>
			</div>
		</aside>
	);
}
