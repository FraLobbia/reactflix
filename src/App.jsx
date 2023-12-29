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
			<Gallery />
			<MyFooter />
		</>
	);
}

export default App;
