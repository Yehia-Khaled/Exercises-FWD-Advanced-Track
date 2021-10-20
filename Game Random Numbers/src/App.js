import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Score from './Score'
import Game from "./Game";

class App extends Component {

    state={
        numQuestions : 0,
        correctAnswer: 0,
    };

    handleAnswerToEvaluate=(answerWasCorrect)=>{
        if(answerWasCorrect){
            this.setState({correctAnswer:this.state.correctAnswer+1})
        }
        this.setState({numQuestions:this.state.numQuestions+1})
        /*if (answerWasCorrect) {
            this.setState(currState => ({
                correctAnswer: currState.correctAnswer + 1,
            }));
        }
        this.setState(currState => ({
            numQuestions: currState.numQuestions + 1,
        }));*/
    }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
          <Game handleAnswerToEvaluate={this.handleAnswerToEvaluate}/>
        <Score numCorrect={this.state.correctAnswer} numQuestions={this.state.numQuestions}/>
      </div>
    );
  }
}

export default App;
