import PropTypes from 'prop-types';

function RenderList(props) {
  
    const itemList = props.items
    const category = props.category
  
    const listItems = itemList.map((fruit) => (
      <li key={fruit.id}>
        {fruit.name} &emsp; {fruit.calories}
      </li>
    ));
    return (
      <>
      
       <br /><br /><br />
        <ol>
            <h1 className="list-category">{category}</h1>
          <h2 className="list-items">{listItems}</h2>
        </ol>
      </>
    );
    
  }

  RenderList.propTypes = {
    category: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.number,name: PropTypes.string, calories: PropTypes.number})),
    }


  RenderList.defaultProps = {
    category : 'Category',
    items: []
  }
  export default RenderList;
  