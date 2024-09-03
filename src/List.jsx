function List() {
    
  const fruits = [
    { id: 17, name: "apple", calories: 95 },
    { id: 28, name: "orange", calories: 45 },
    { id: 6763, name: "banana", calories: 105 },
    { id: 776, name: "coconut", calories: 159 },
    { id: 44, name: "pineapple", calories: 37 },
  ];

  //sorting an array of object
  fruits.sort((a, b) => a.name.localeCompare(b.name));

  const listItems = fruits.map((fruit) => <li key={fruit.id}>{fruit.name}</li>);
  return (
    <ol>
      <h1>{listItems}</h1>
    </ol>
  );
}
export default List;
