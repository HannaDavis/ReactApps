import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Form from './components/Form';
import bag from './img/bag.jpg';
class App extends Component {
  render() {
    return (
      <div className="main-content">
        <img src={bag} alt="grocery bag" className="bag__img" />
        <Form />
      </div>
    )
  }
}

export default App;
