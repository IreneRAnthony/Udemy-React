import React, { Component } from 'react';
import './App.css';
import UserOutput from './UserOutput/UserOutput';
import UserInput from './UserInput/UserInput';

class App extends Component {
  state = {
    paragraphs:
    [{
      paragraphOne: "I’ve come to make an announcement: Shadow the Hedgehog’s a bitch-ass motherfucker, he pissed on my fucking wife! That’s right, he took his hedgehog-fuckin’ quilly dick out and he pissed on my fucking wife, and he said his dick was “this big,” and I said “that’s disgusting,” so I’m making a callout post on my Twitter.com: Shadow the Hedgehog, you’ve got a small dick, It’s the size of this walnut except WAY smaller. And guess what? Here’s what my dong looks like! That’s right, baby, tall points, no quills, no pillows — look at that, it looks like two balls and a bong! He fucked my wife, so guess what, I’m gonna fuck the Earth! That’s right, this is what you get: my SUPER LASER PISS!! Except I’m not gonna piss on the Earth, I’m gonna go higher!! I’m pissing ON THE MOON! How do you like that, Obama?! I PISSED ON THE MOON, YOU IDIOT!! You have twenty-three hours before the piss drrrrroplllllllets hit the fucking Earth! Now get outta my fucking sight, before I piss on you too!",
      paragraphTwo: "According to all known laws of aviation, there is no way a bee should be able to fly. Its wings are too small to get its fat little body off the ground. The bee, of course, flies anyway because bees don't care what humans think is impossible. Yellow, black. Yellow, black. Yellow, black. Yellow, black. Ooh, black and yellow! Let's shake it up a little. Barry! Breakfast is ready! Ooming! Hang on a second. Hello? - Barry? - Adam? - Oan you believe this is happening? - I can't. I'll pick you up. Looking sharp. Use the stairs. Your father paid good money for those. Sorry. I'm excited."
    }],
    username: "PyroKittensInSuits"
  };

  changeUsernameHandler = (event) => {
    this.setState({
      username: event.target.value
    })
  };

  render() {
    const style = {
      padding: '3px',
      textAlign: 'center',
      margin: '16px 35px auto'
    }

    return (
      <div className = "mainParagraphs"  style = {style}>
      <UserInput
      changed = {this.changeUsernameHandler} 
      currentName = {this.state.username} />
      <UserOutput
      paragraphOne = {this.state.paragraphs[0].paragraphOne}
      paragraphTwo = {this.state.paragraphs[0].paragraphTwo}
      currentUsername = {this.state.username} />
      </div>
    );
  }
};

export default App;
