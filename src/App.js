import {
	BrowserRouter as Router,
	Routes,
	Route,
  } from "react-router-dom";
import UserProvider from "./UserProvider"; 
import Users from '../src/components/users/Users'
import User from '../src/components/users/User'
import Navbar from './components/navbar/Navbar';
import "./App.css";

function App() {
	return (
		<Router>
			<UserProvider>
				<div className="App">
					<Navbar/>
					<h1> Hello Sunrisers!</h1>
					<Routes>
						<Route exact path='/' element={<Users/>} />
						<Route path='/user/:id' element={<User/>} />
					</Routes>
				</div>
			</UserProvider>
		</Router>
	);
}

export default App;
