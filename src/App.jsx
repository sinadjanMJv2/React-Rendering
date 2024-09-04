import UserGreeting from "./UserGreeting.jsx";
import List from "./List.jsx";
import RenderList from './RenderList.jsx';


function App() {

  const fruits = [
    { id: 17, name: "apple", calories: 95 },
    { id: 28, name: "orange", calories: 45 },
    { id: 6763, name: "banana", calories: 105 },
    { id: 776, name: "coconut", calories: 159 },
    { id: 44, name: "pineapple", calories: 37 },
  ];
  const vegetables = [
    { id: 1753, name: "Okra", calories: 95 },
    { id: 284, name: "Batong", calories: 85 },
    { id: 673, name: "Kalabasa", calories: 75 },
    { id: 76, name: "Talong", calories: 65 },
    { id: 444, name: "Kamatis", calories: 55 },
  ];



  
  return (
    <>
      <UserGreeting isLogin={true} />
      <br />
      <hr />
      <UserGreeting isLogin={true} username="Michael Jay" />
      <br />
      <hr />
      <List />
      <br />
      <hr />
      <h1>This method show  passing the data from parent to child and make it reusable</h1>
      {fruits.length > 0 ? <RenderList items={fruits} category="Fruits"/> : null}
      {/* {fruits.length > 0 ? <RenderList items={vegetables} category="Vegetables"/> : null} */}
      {vegetables.length > 0 && <RenderList items={vegetables} category="Vegetables"/>}
    
    </>
  );
}

export default App;
