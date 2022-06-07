import './App.css';
import { Message } from './components/Message/Message';

function App() {
	const messageText = 'message';

	return (
		<div className="App">
			<header className="App-header">

			</header>
			<main>
				<Message text={messageText}/>
			</main>
		</div>
	);
}

export default App;
