import React, { Component } from "react";
import { render } from "react-dom";
import Flickity from "react-flickity-component";
import "flickity/dist/flickity.css";

const reviewjson = [
  { id: 1, name: "first slider" },
  { id: 2, name: "second slider" },
  { id: 3, name: "third slider" },
  { id: 4, name: "fourth slider" },
  { id: 5, name: "fifth slider" },
  { id: 6, name: "sixth slider" },
  { id: 7, name: "seventh slider" }
];

const style = {
  width: "80%",
  height: "300px",
  border: "1px solid black"
};

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reviewjson: [
        {
          id: 0,
          name: "Loading..."
        }
      ]
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        reviewjson: reviewjson
      });
    }, 2000);
  }

  render() {
    const flickityOptions = {
      cellSelector: ".review",
      fullscreen: true
    };

    return (
      <div className="carousel-holder">
        <Flickity options={flickityOptions} reloadOnUpdate>
          {this.state.reviewjson.map((i) => (
            <div className="review" key={i.id} name={i.name} style={style}>
              {i.name}
            </div>
          ))}
        </Flickity>
      </div>
    );
  }
}
