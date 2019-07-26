import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Form from './components/Form';
import List from './components/List';
import bag from './img/bag.jpg';
class App extends Component {
  state = {
    value : "",
    item : [],
  }

  addItem = (item) => {
    this.setState({
      item: [...this.state.item, item],
    });
  }


  deleteItem = (e) => {
    const index = e.target.getAttribute("data-index");
    const { item } = this.state;
    this.setState({
      item: item.filter((item, i) => {
        return i != index
      }),
    })

  }

  render() {
    const { item } = this.state;
    const result = item.map((entry, index) => {
      return <li  key={index} >{entry.item}
                <span className="delete"
                    key={index}
                    data-index={index}
                    onClick={this.deleteItem}>
                  X
                  </span>
             </li>
    });
    return (
      <div className="main-content">
        <img src={bag} alt="grocery bag" className="bag__img" />
        <Form
          addItem={this.addItem}
        />
        <List list={ result }/>
      </div>
    )
  }
}

export default App;
