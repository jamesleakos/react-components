// TODO
const { useState } = React;
const GroceryListItem = (props) => {
  const [isBold, setBold] = useState(false);

  return (
    // <li style={{fontWeight: isBold}} onHover={setBold(!isBold)}>{props.name}</li> 
    <li style={ isBold ? { fontWeight: 'bold' } : null } onMouseOver={() => setBold(!isBold)} onMouseOut={() => setBold(!isBold)} >{props.name}</li> 
    // <li>{props.name}</li> 
  );
};

const GroceryList = (props) => {
  return (
    <div>
      <h2>Grocery List</h2>
      <ul>
        {
          props.list.map((item) => {
            return <GroceryListItem name={item} />
          })
        }
      </ul>
    </div>
  )
};


const App = () => {
  return (
    <div>
      <GroceryList list={['kale', 'spinach', 'beef']}/>
    </div>
  )
};

ReactDOM.render(<App />, document.getElementById('app'));