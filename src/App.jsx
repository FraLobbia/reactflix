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
			<h2 className="ms-3">Trending Now</h2>
			<Gallery
				searchQuery="batman"
				stile="mb-3"
			/>
			<h2 className="ms-3">Watch It Again</h2>
			<Gallery
				searchQuery="spider-man"
				stile="mb-3"
			/>
			<h2 className="ms-3">Popular on Netflix</h2>
			<Gallery searchQuery="superman" />
			<MyFooter />
		</>
	);
}

export default App;
