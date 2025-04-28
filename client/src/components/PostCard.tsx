import ArrowDownCircle from '../icons/arrow-down-circle';
import ArrowUpCircle from '../icons/arrow-up-circle';

export default function PostCard() {
	return (
		<div class='flex flex-col p-4 text-white bg-base-300 border border-zinc-600 rounded-xl'>
			<div class='flex flex-row gap-x-3 mb-3'>
				<img
					class='object-cover rounded-full w-8 h-8'
					src='https://picsum.photos/256?random=1'
					alt='Some logo'
					width='32'
					height='32'
				/>
				<img
					class='object-cover rounded-full w-8 h-8'
					src='https://picsum.photos/256?random=2'
					alt='Some logo'
					width='32'
					height='32'
				/>
			</div>
			<div class='flex mb-8 text-xl font-semibold'>Is Go dead?</div>
			<div class='flex mb-3 flex-row gap-x-2'>
				<div class='badge border-zinc-700 rounded-lg bg-base-300'>#golang</div>
				<div class='badge border-zinc-700 rounded-lg bg-base-300'>
					#stupidity
				</div>
			</div>
			<div class='flex justify-end mb-2 text-xs text-base-content'>Today</div>
			<div class='flex mb-5'>
				<img
					class='object-cover rounded-xl'
					src='https://picsum.photos/854/480'
					alt='Some photo'
					width='280'
					height='140'
				/>
			</div>
			<div class='flex flex-row'>
				<button
					class='flex py-1 ps-2 pe-3 gap-x-2 border border-e-0 rounded-s-xl'
					onclick={() => console.log('test')}
				>
					<ArrowUpCircle />
					247
				</button>
				<button class='ps-3 pe-2 border border-s-0 rounded-e-xl'>
					<ArrowDownCircle />
				</button>
			</div>
		</div>
	);
}
