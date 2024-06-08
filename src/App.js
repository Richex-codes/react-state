import "./App.css";
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: "Igwe Oluchukwu Richard",
      bio: `Hi, I'm Igwe Richard. I was born on December 9, 2005, and I'm currently a university student with a strong ambition to become a software engineer. Technology and innovation have always fascinated me, and I’m committed to turning my passion into a career.
  
      In my free time, I love playing video games—they not only entertain me but also help me enhance my problem-solving skills. While I haven't achieved any major milestones yet, I'm focused on my studies and excited about what the future holds. I'm just a regular student navigating through school and aiming high in the tech world.`,
      profession: "Student",
      imgSrc: null,
      shows: false,
      timer: 0,
    };
  }

  componentDidMount() {
    this.interval = setInterval(
      () =>
        this.setState((currentTimer) => ({
          timer: currentTimer.timer + 1,
        })),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  handleClick = () => {
    this.setState({
      shows: !this.state.shows,
    });
  };
  render() {
    return (
      <div className="App">
        <div>
          <h1>{this.state.shows ? this.state.fullName : ""}</h1>
          <h2>{this.state.shows ? this.state.bio : ""}</h2>
          <h3>
            {this.state.shows ? `Occupation: ${this.state.profession}` : ""}
          </h3>
        </div>
        <button
          style={{ padding: "10px", backgroundColor: "red" }}
          onClick={this.handleClick}
        >
          Click me
        </button>
        <div>
          <h1 style={{ color: "red", }}>{this.state.timer}</h1>
        </div>
      </div>
    );
  }
}

export default App;
