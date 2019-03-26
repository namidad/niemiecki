import React, { Component } from 'react';
import './App.css';
import slowka from './slowka'

class App extends Component {

  state={
    slowka,
    index: 0,
    div1: {},
    div2: {},
    div3: {},
    correct: 0,
    incorrect: 0,
  }

  handleClick = (e) => {
    if(e===1){
      const newSlowka=this.state.slowka;
      if(this.state.slowka[this.state.index].rodzajnik==="der"){ 
        newSlowka[this.state.index].amount--;
        if(newSlowka[this.state.index].amount===0){
          newSlowka.splice(this.state.index,1);
        }
        this.setState({
          slowka: newSlowka,
          correct: this.state.correct+1,
          div1: {background: "green",pointerEvents: "none"},
          div2: {pointerEvents: "none"},
          div3: {pointerEvents: "none"},
        })
      } else if(this.state.slowka[this.state.index].rodzajnik==="die"){
          newSlowka[this.state.index].amount++;
            this.setState({
              div1: {background: "red", pointerEvents: "none"},
              div2: {background: "green", pointerEvents: "none"},
              div3: {pointerEvents: "none"},
              incorrect: this.state.incorrect+1,
            })
          } else {
            newSlowka[this.state.index].amount++;
            this.setState({
              div1: {background: "red", pointerEvents: "none"},
              div2: {pointerEvents: "none"},
              div3: {background: "green", pointerEvents: "none"},
              incorrect: this.state.incorrect+1,
            })
          }
    } else if (e===2) {
      const newSlowka=this.state.slowka;
      if(this.state.slowka[this.state.index].rodzajnik==="die"){
        newSlowka[this.state.index].amount--;
        if(newSlowka[this.state.index].amount===0){
          newSlowka.splice(this.state.index,1);
        }
        this.setState({
          slowka: newSlowka,
          correct: this.state.correct+1,
          div2: {background: "green",pointerEvents: "none"},
          div1: {pointerEvents: "none"},
          div3: {pointerEvents: "none"},
        })
      } else if(this.state.slowka[this.state.index].rodzajnik==="der"){
        newSlowka[this.state.index].amount++;
        this.setState({
          div1: {background: "green", pointerEvents: "none"},
          div2: {background: "red", pointerEvents: "none"},
          div3: {pointerEvents: "none"},
          incorrect: this.state.incorrect+1,
        })
      } else {
        newSlowka[this.state.index].amount++;
        this.setState({
          div1: {pointerEvents: "none"},
          div3: {background: "green", pointerEvents: "none"},
          div2: {background: "red", pointerEvents: "none"},
          incorrect: this.state.incorrect+1,
        })
      }
    } else {
      const newSlowka=this.state.slowka;
      if(this.state.slowka[this.state.index].rodzajnik==="das"){
        newSlowka[this.state.index].amount--;
        if(newSlowka[this.state.index].amount===0){
          newSlowka.splice(this.state.index,1);
        }
        this.setState({
          slowka: newSlowka,
          correct: this.state.correct+1,
          div3: {background: "green",pointerEvents: "none"},
          div2: {pointerEvents: "none"},
          div1: {pointerEvents: "none"},
        })
      } else if(this.state.slowka[this.state.index].rodzajnik==="der"){
        newSlowka[this.state.index].amount++;
        this.setState({
          div1: {background: "green", pointerEvents: "none"},
          div2: {pointerEvents: "none"},
          div3: {background: "red", pointerEvents: "none"},
          incorrect: this.state.incorrect+1,
        })
      } else {
        newSlowka[this.state.index].amount++;
        this.setState({
          div1: {pointerEvents: "none"},
          div2: {background: "green", pointerEvents: "none"},
          div3: {background: "red", pointerEvents: "none"},
          incorrect: this.state.incorrect+1,
        })
    }
  }
  }

  handleChange = () => {
    if(this.state.slowka.length>0){
      const ind = Math.floor(Math.random()*this.state.slowka.length);
      this.setState({
        index: ind,
        div1: {background: "white", pointerEvents: "auto"},
        div2: {background: "white", pointerEvents: "auto"},
        div3: {background: "white", pointerEvents: "auto"},
      })
    }
    
  }


  render() {
    console.log(this.state.slowka);
    return (
      <div className={"container"}>
        <div className={"testContainer"}>
          <h1 className={"wordBox"}>
            {this.state.slowka[this.state.index].translated}
          </h1>
          <div className={"answerBox"}>
            <div style={this.state.div1} onClick={e => this.handleClick(1)}>der</div>
            <div style={this.state.div2} onClick={e => this.handleClick(2)}>die</div>
            <div style={this.state.div3} onClick={e => this.handleClick(3)}>das</div>
          </div>
          <div>
            <div onClick={this.handleChange} className={"nextWord"}>
            Nastepne słówko
            </div>
            <div className={"stats"}><div>Zostało słówek: {this.state.slowka.length}</div>
            <div>Poprawne odpowiedzi: {this.state.correct}</div>
            <div>Bledne odpowiedzi: {this.state.incorrect}</div></div>
          </div>
          
        </div>
        
      </div>
    );
  }
}

export default App;
