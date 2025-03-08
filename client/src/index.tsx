import { render } from 'solid-js/web';
import './index.css';
import { Route, Router } from '@solidjs/router';
import { lazy } from 'solid-js';

const App = lazy(() => import('./App'));
const Home = lazy(() => import('./pages/Index'));
const NotFound = lazy(() => import('./pages/error/NotFound'));

const root = document.getElementById('root');

render(() => (
	<Router root={App}>
		<Route path='/' component={Home}></Route>
		<Route path='*404' component={NotFound}></Route>
	</Router>
	),
	root!
);
