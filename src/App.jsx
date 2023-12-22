import logo from "./netflix_logo.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNav from "./components/MyNav";
import { Container } from "react-bootstrap";
import ActionBar from "./components/ActionsBar";
import MyFooter from "./components/MyFooter";
import Gallery from "./components/Gallery";

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
