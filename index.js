import React, { Component } from "react";
import { render } from "react-dom";
import Hello from "./Hello";
import "./style.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "React"
    };
  }

  plans = [
    {
      name: "Silver500",
      premiumInDollars: 500,
      validityInYears: 2
    },
    {
      name: "Gold250",
      premiumInDollars: 250,
      validityInYears: 3
    },
    {
      name: "Platinum300",
      premiumInDollars: 300,
      validityInYears: 5
    },
    {
      name: "Bronze50",
      premiumInDollars: 50,
      validityInYears: 1.5
    },
    {
      name: "Silver 200",
      premiumInDollars: 200,
      validityInYears: 2
    }
  ];

  render() {
    return (
      <div>
        <Hello />
        <p>Here's the list of plans rendered in the UI using map():</p>
        <ul>
          {this.plans.map(plan => (
            <div>
            <li>{plan.name} - ${plan.premiumInDollars}</li>
            <span>Validity in years: {plan.validityInYears}</span>
            <br/><br/>
            </div>
          ))}
        </ul>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
