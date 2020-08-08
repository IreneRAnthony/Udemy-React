import React, { Component } from 'react';
import './App.css';
import Validation from './Validation/Validation';
import Char from './Char/Char';

class App extends Component {
  state = {
    paragraph: ''
  };

  outputParagraphLength = (event) => {
    this.setState({paragraph: event.target.value});
  };

  deleteCharacter = (charIndex) => {
    const characters = this.state.paragraph.split('');
    characters.splice(charIndex, 1);
    const updatedChar = characters.join('');
    this.setState({paragraph: updatedChar});
  };

  render() {
    const charList = this.state.paragraph.split('').map((ch, index) => {
      return <Char 
        character = {ch}
        key = {index}
        clicked = {() => this.deleteCharacter(index)} />;
    });

    return (
      <div className="App">
        <input 
        type = "text" 
        onChange = {this.outputParagraphLength} 
        value = {this.state.paragraph} />
        <Validation
        text = {this.state.paragraph}
        length = {this.state.paragraph.length}
        />
        {charList}
      </div>
    );
  }
}

export default App;
