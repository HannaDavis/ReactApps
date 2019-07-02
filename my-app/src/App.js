import React, { Component } from 'react';
import './App.css';
import './Person/Person.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPerson: false

  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p=>{
      return p.id === id;
    });
    const person = {...this.state.persons[personIndex]};
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState( {persons: persons} )
  }

  togglePerson = () => {
    const doesShow = this.state.showPerson;
    this.setState({showPerson : !doesShow});
  }

  deletePersonHandler = (personIndex) =>{
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  render () {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      padding: "8px",
    };

    let person = null;

    if(this.state.showPerson){
      person = (
          <div>
          {this.state.persons.map((person1, index) => {
            return <Person
              click={()=>this.deletePersonHandler(index)}
              name={person1.name}
              age={person1.age}
              key={person1.id}
              changed={(event)=>this.nameChangedHandler(event, person1.id)}
              />
          })}
        </div>
      );

      style.backgroundColor = 'red';
    }

    const classes = [];
    if(this.state.persons.length <=2){
      classes.push('red');
    }
    if(this.state.persons.length <=1){
      classes.push('bold');
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p className={classes.join(' ')}>This is really working!</p>
        <button
            style={style}
            onClick={this.togglePerson}>Toogle Person</button>
            {person}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
