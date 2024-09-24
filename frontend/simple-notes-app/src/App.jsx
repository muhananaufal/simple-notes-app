// import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import SignUp from './pages/SignUp/SignUp';
import SignIn from './pages/SignIn/SignIn';

const routes = (
	<Router>
		<Routes>
			<Route path="/dashboard" exact element={<Home />} />
			<Route path="/signin" exact element={<SignIn />} />
			<Route path="/signup" exact element={<SignUp />} />
		</Routes>
	</Router>
);

const App = () => {
	return <div>{routes}</div>;
};

export default App;
