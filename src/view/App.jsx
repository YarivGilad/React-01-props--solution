import Card from './Card';
import TopBar from './TopBar';
import Vacation from './Vacations';

export default function App() {
	return (
		<div className="app">
			<TopBar>
				<h1>Hello React</h1>
			</TopBar>

			<h1 className="headline white-text">I am the main Application</h1>
			<Vacation available={false} />
			<Card subject="people" action="greet" />
			{/* <Card subject="friends" action="meet" something="value of sorts" /> */}
		</div>
	)
}

// const App = () => (
// 	<div className="app">
// 		<TopBar />
// 		<h1 className="headline white-text">I am the main Application</h1>
// 		<Vacation available={true} />
// 		<Card action="meet" subject="friends" />
// 	</div>
// )
// export default App
