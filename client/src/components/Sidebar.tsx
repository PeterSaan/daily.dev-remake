import { A } from '@solidjs/router';

export default function Sidebar() {
	return (
		<aside class='sticky'>
			<div class='flex flex-col py-3 px-4 h-[calc(100vh-65px)] overflow-y-auto border-e border-zinc-700'>
				<div class='items-center'>
					<div class='text-zinc-500 font-semibold'>Menu</div>
					<button class='btn btn-info my-3'>
						<A href='' class='px-12 text-nowrap'>
							+ New post
						</A>
					</button>
				</div>
			</div>
		</aside>
	);
}
