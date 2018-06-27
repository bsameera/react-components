// TODO
// var GroceryListItem = (props) => {
  
//   var onListItemClick = (event) => {
//     console.log('I got clicked');
//   };
  
//   return (
//     <ul>
//       <li onClick={onListItemClick}>{props.items[0]}</li>
//       <li>{props.items[1]}</li>
//       <li>{props.items[2]}</li>
//     </ul>  
//   );
// }


// var GroceryList = () => (
//   <GroceryListItem items={['Milk', 'Eggs', 'Cereal']}/>
// );

// ReactDOM.render(<GroceryList />, document.getElementById("app"));

class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {done: false};
  }
  
  onListItemClick() {
    this.setState({
      done: !this.state.done
    });
  }
  
  render() {
    
    var style = {
      textDecoration: this.state.done ? 'line-through' : 'none'
    };
    
    return (
        <li style={style} onClick={this.onListItemClick.bind(this)}>{this.props.item}</li>
    );
  }
}
  
// var Groceries = () => (
//   items = {['Milk', 'Eggs', 'Cereal']} 
// );

var GroceryList = (props) => (
  <ul>
    {props.items.map(item =>
      <GroceryListItem item={item} />
    )}
  </ul> 
);

var App = () => (
  <GroceryList items={['Milk', 'Eggs', 'Cereal']}/>   
)

ReactDOM.render(<App />, document.getElementById("app"));