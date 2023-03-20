import logo from "./logo.svg";
import "./App.css";
import SignupForm from "./pages/Signup";
import LoginForm from "./pages/Login";
import Task from "./pages/Task";
import Navbar from "./components/Navbar";
import Allroutes from "./components/Allroutes";

function App() {
  return (
    <div className="App">
      {/* <SignupForm /> */}
      {/* <LoginForm /> */}
      <Allroutes />
    </div>
  );
}

export default App;
