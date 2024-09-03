import UserGreeting from "./UserGreeting.jsx";
import List from "./List.jsx";

function App() {
  return (
    <>
      <UserGreeting isLogin={true} />
      <br />
      <hr />
      <UserGreeting isLogin={true} username="Michael Jay" />
      <br />
      <hr />
      <List />
    </>
  );
}

export default App;
