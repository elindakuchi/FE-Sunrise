import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserProvider from "./UserProvider";
import Users from "../src/components/users/Users";
import User from "../src/components/users/User";
import Navbar from "./components/navbar/Navbar";
import "./App.css";

function App() {
<<<<<<< HEAD
  return (
    <Router>
      <UserProvider>
        <div className="App">
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Users />} />
            <Route path="/user/:id" element={<User />} />
          </Routes>
        </div>
      </UserProvider>
    </Router>
  );
=======
	return (
		<Router>
			<UserProvider>
				<div className="App">
					<Navbar/>
					<Routes>
						<Route exact path='/' element={<Users/>} />
						<Route path='/user/:id' element={<User/>} />
					</Routes>
				</div>
			</UserProvider>
		</Router>
	);
>>>>>>> main
}

export default App;
