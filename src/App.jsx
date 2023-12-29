import logo from "./netflix_logo.png";

import "./App.css";
import MyNav from "./components/MyNav";
import ActionBar from "./components/ActionsBar";

import Gallery from "./components/Gallery";
import MyFooter from "./components/MyFooter";

function App() {
	return (
		<>
			<MyNav logo={logo} />
			<ActionBar />
			<h2>Trending</h2>
			<Gallery searchQuery="batman" />
			<Gallery searchQuery="spider-man" stile="my-5" />
			<Gallery searchQuery="superman" />
			<MyFooter />
		</>
	);
}

export default App;
