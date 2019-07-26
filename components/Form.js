import React,{Component} from 'react'

class Form extends Component {
  constructor(props) {
    super(props)

    this.initialState = {
      item : [],
    }

    this.state = this.initialState;
  }

  saveItem = (e) => {
      const { name, value } = e.target;
      this.setState({
        item: value,
      });
  }

  submitForm = (e) => {
    e.preventDefault();
    this.props.addItem(this.state);
    this.setState(this.initialState);
    document.getElementById("test").value = "";
  }

  render() {
     const { name, job } = this.state;
    return (
      <form>
        <h3>Grocery List</h3>
        <div className="block__holder">
          <input
            id="test"
            type="text"
            placeholder=" Shopping For"
            onChange={this.saveItem}
          />
          <div class="line"></div>
        </div>
        <button
          className="button hollow"
          onClick={this.submitForm}
        >Throw In My Bag</button>
      </form>
    )
  }
}

export default Form;
