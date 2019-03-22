import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    croix: "X",
    round: "O",
    tab: ["", "", "", "", "", "", "", "", ""],
    player_one: true,
    player_two: false,
    resul: "",
    draw: false
  };

  computer = tab => {
    //console.log(tab);
    let index = Math.floor(Math.random() * 9);
    if (tab[index] === "") {
      tab[index] = "O";
      this.setState({ tab: tab, player_one: true, player_two: false });
    } else {
      this.computer(this.state.tab);
    }
  };

  MakeAMarck = result => {
    let newTab = [...this.state.tab];
    if (this.state.player_one === true) {
      if (newTab[Number(result)] === "") {
        newTab[Number(result)] = this.state.croix;
        this.setState({ player_one: false, player_two: true });
      }
    }

    //console.log(newTab);
    this.setState({ tab: newTab });
  };
  verification = tab => {
    //console.log(tab);
    let resulta = "";
    if (tab[0] === tab[1] && tab[0] === tab[2]) {
      tab[0] === "X"
        ? (resulta = "player one gagne")
        : tab[0] === "O"
        ? (resulta = "player two gagne")
        : (resulta = "");
    } else if (tab[3] === tab[4] && tab[3] === tab[5]) {
      tab[3] === "X"
        ? (resulta = "player one gagne")
        : tab[3] === "O"
        ? (resulta = "player two gagne")
        : (resulta = "");
    } else if (tab[6] === tab[7] && tab[6] === tab[8]) {
      tab[6] === "X"
        ? (resulta = "player one gagne")
        : tab[6] === "O"
        ? (resulta = "player two gagne")
        : (resulta = "");
    } else if (tab[0] === tab[3] && tab[0] === tab[6]) {
      tab[0] === "X"
        ? (resulta = "player one gagne")
        : tab[0] === "O"
        ? (resulta = "player two gagne")
        : (resulta = "");
    } else if (tab[1] === tab[4] && tab[1] === tab[7]) {
      tab[1] === "X"
        ? (resulta = "player one gagne")
        : tab[1] === "O"
        ? (resulta = "player two gagne")
        : (resulta = "");
    } else if (tab[2] === tab[5] && tab[2] === tab[8]) {
      tab[2] === "X"
        ? (resulta = "player one gagne")
        : tab[2] === "O"
        ? (resulta = "player two gagne")
        : (resulta = "");
    } else if (tab[0] === tab[4] && tab[0] === tab[8]) {
      tab[0] === "X"
        ? (resulta = "player one gagne")
        : tab[0] === "O"
        ? (resulta = "player two gagne")
        : (resulta = "");
    } else if (tab[2] === tab[4] && tab[2] === tab[6]) {
      tab[2] === "X"
        ? (resulta = "player one gagne")
        : tab[2] === "O"
        ? (resulta = "player two gagne")
        : (resulta = "");
    }
    return resulta;
  };

  deleteTab = () => {
    this.setState({
      croix: "X",
      round: "O",
      tab: ["", "", "", "", "", "", "", "", ""],
      player_one: true,
      player_two: false,
      resul: "",
      draw: false
    });
  };
  drawVerification = tab => {
    for (let i = 0; i <= tab.length - 1; i++) {
      if (tab[i] === "") {
        return false;
      }
    }
    return true;
  };

  render() {
    this.state.draw = this.drawVerification(this.state.tab);
    this.state.resul = this.verification(this.state.tab);

    if (
      this.state.player_two === true &&
      this.state.resul === "" &&
      this.state.draw === false
    ) {
      this.computer(this.state.tab);
    } else if (this.state.draw === true && this.state.resul === "") {
      this.state.resul = "Draw try Again";
    }

    return (
      <div className="App">
        <div className="resulta">
          {" "}
          Next player :{" "}
          {this.state.resul === ""
            ? this.state.player_one === true
              ? "Player One"
              : "Player Two"
            : this.state.resul}
        </div>

        <div className="container">
          <div className="row" id="case1">
            <div className="col" onClick={this.MakeAMarck.bind(this, 0)}>
              {this.state.tab[0]}
            </div>
            <div className="col2" onClick={this.MakeAMarck.bind(this, 1)}>
              {this.state.tab[1]}
              {/* <div className="box2">
                <svg viewbox="0 0 40 40">
                  <path
                    className="close-x"
                    d="M 10,10 L 30,30 M 30,10 L 10,30"
                  />
                </svg>
              </div> */}
            </div>
            <div className="col" onClick={this.MakeAMarck.bind(this, 2)}>
              {this.state.tab[2]}
            </div>
          </div>
          <div className="row" id="row2">
            <div className="col" onClick={this.MakeAMarck.bind(this, 3)}>
              {this.state.tab[3]}
            </div>
            <div className="col4" onClick={this.MakeAMarck.bind(this, 4)}>
              {this.state.tab[4]}
            </div>
            <div className="col" onClick={this.MakeAMarck.bind(this, 5)}>
              {this.state.tab[5]}
            </div>
          </div>
          <div className="row">
            <div className="col" onClick={this.MakeAMarck.bind(this, 6)}>
              {this.state.tab[6]}
            </div>
            <div className="col2" onClick={this.MakeAMarck.bind(this, 7)}>
              {this.state.tab[7]}
            </div>
            <div className="col" onClick={this.MakeAMarck.bind(this, 8)}>
              {this.state.tab[8]}
            </div>
          </div>
        </div>
        <button
          className="reset"
          onClick={this.deleteTab}
          style={{
            display: this.state.resul === "" ? "none" : ""
          }}
        >
          RESTART GAME
        </button>
      </div>
    );
  }
}

export default App;
