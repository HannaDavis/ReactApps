import React,{Component} from 'react'

class Form extends Component {
  render() {
    return (
      <form>
        <h3>Grocery List</h3>
        <div className="block__holder">
          <input type="text" placeholder=" Shopping For"/>
          <div class="line"></div>
        </div>
        <button className="button hollow">Throw In My Bag</button>
      </form>
    )
  }
}

export default Form;
