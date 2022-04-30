import SignIn from './components/SignIn';
// import 'react-calendar/dist/Calendar.css'
import {useAuthState} from "react-firebase-hooks/auth";
import {auth} from "./firebase";
import Line from './components/Line';


function App() {
	//今に認証状態を変数userに入れる
	const [user] = useAuthState(auth);
  	return (
    	<div>
			{user ? <Line /> : <SignIn />}
    	</div>
  	);
}

export default App;
