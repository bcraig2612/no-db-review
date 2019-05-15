import React, { Component } from "react";
import axios from "axios";
import "./App.css";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      memeCollection: [],
      externalMemes: []
    };
    this.getMemesFromExternalApi = this.getMemesFromExternalApi.bind(this);
    this.getMyMemeCollection = this.getMyMemeCollection.bind(this);
  }

  componentDidMount() {
    this.getMemesFromExternalApi();
    this.getMyMemeCollection();
  }

  getMyMemeCollection() {
    axios.get("/api/dem_memes").then(response => {
      this.setState({
        memeCollection: response.data
      });
    });
  }

  getMemesFromExternalApi() {
    axios.get("https://api.imgflip.com/get_memes").then(response => {
      this.setState({
        externalMemes: response.data.data.memes
      });
    });
  }

  postMemeToCollection(meme) {
    // meme is an object
    axios.post("/api/dem_memes", meme).then(response => {
      this.setState({
        memeCollection: response.data
      });
    });
  }

  render() {
    const { memeCollection, externalMemes } = this.state;

    const mappedMemeCollection = memeCollection.map(element => {
      return (
        <div key={element.id}>
          <span>{element.name}</span>
          <img src={element.url} alt="" />
        </div>
      );
    });

    const mappedExternalMemes = externalMemes.map(element => {
      return (
        <div key={element.id}>
          <span>{element.name}</span>
          <img src={element.url} alt="" />
          <button onClick={() => this.postMemeToCollection(element)}>
            Add Meme
          </button>
        </div>
      );
    });
    return (
      <div className="App">
        <div>{mappedMemeCollection}</div>
        <div>{mappedExternalMemes}</div>
      </div>
    );
  }
}
