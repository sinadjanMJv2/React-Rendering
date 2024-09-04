function List() {
  const fruits = [
    { id: 17, name: "apple", calories: 95 },
    { id: 28, name: "orange", calories: 45 },
    { id: 6763, name: "banana", calories: 105 },
    { id: 776, name: "coconut", calories: 159 },
    { id: 44, name: "pineapple", calories: 37 },
  ];

  //sorting an array of object alphabetical order
  fruits.sort((a, b) => a.name.localeCompare(b.name));

  //sorting an array of object reverse alphabetical order
  // fruits.sort((a, b) => b.name.localeCompare(a.name));

  //sorting an array of object numerical order
  //fruits.sort((a, b) => a.calories - b.calories);

  //sorting an array of object reverse numerical order
  //fruits.sort((a, b) => b.calories - a.calories);

  const listItems = fruits.map((fruit) => (
    <li key={fruit.id}>
      {fruit.name} &emsp; {fruit.calories}
    </li>
  ));
  return (
    <>
    <h1>This method show not passing the data within the child</h1>
      <ol>
        <h2>{listItems}</h2>
      </ol>
      
    </>
  );
}
export default List;
