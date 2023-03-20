import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../Redux/action";

function LoginForm() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.userReducer.users);
  // console.log(users.data);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const matchedUser = users.data.find(
      (user) => user.email === email && user.password === password
    );
    if (matchedUser) {
      console.log(matchedUser);
      localStorage.setItem("taskm", matchedUser.username);
      setLoggedIn(true);
      alert("login sucessfully");
    } else {
      alert("User not Found");
    }
  };

  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </label>

      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </label>

      <button type="submit">Sign up</button>
      {loggedIn && <p>You are logged in!</p>}
    </form>
  );
}

export default LoginForm;
