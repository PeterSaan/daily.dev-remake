import Topbar from './components/Topbar';
import Sidebar from './components/Sidebar';
import { ParentProps } from 'solid-js';

export default function App(props: ParentProps) {
	return (
		<div class='antialiased'>
			<Topbar />
			<div class='flex'>
				<Sidebar />
				{props.children}
			</div>
		</div>
	);
}
