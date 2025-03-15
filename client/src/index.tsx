import { render } from 'solid-js/web';
import './index.css';
import { Route, Router } from '@solidjs/router';
import { lazy } from 'solid-js';

const App = lazy(() => import('./App'));
const Home = lazy(() => import('./routes/Index'));
const NotFound = lazy(() => import('./routes/error/NotFound'));

const root = document.getElementById('root');

if (!root) throw new Error("Root div not found");

render(
	() => (
		<Router root={App}>
			<Route path="/" component={Home} />
			<Route path="*" component={NotFound} />
		</Router>
	),
	root
)
