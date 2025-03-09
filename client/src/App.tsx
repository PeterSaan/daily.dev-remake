import Topbar from './components/Topbar';
import Sidebar from './components/Sidebar';

export default function App() {
	return (
		<div class='antialiased min-h-screen bg-zinc-900'>
			<Topbar />
			<Sidebar />
		</div>
	);
}
