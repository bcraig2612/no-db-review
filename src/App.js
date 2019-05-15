import React, { Component } from "react";
import axios from "axios";
import Meme from "./components/Memes/Meme";
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
    this.updateMemeById = this.updateMemeById.bind(this);
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

  updateMemeById(id, name) {
    console.log(id, name);
    axios.put(`/api/dem_memes/${id}`, {}).then(response => {
      this.setState({
        memeCollection: response.data
      });
    });
  }

  render() {
    const { memeCollection, externalMemes } = this.state;

    const mappedMemeCollection = memeCollection.map(element => {
      return (
        <Meme
          key={element.id}
          inCollection={true}
          name={element.name}
          url={element.url}
          id={element.id}
          updateMemeById={this.updateMemeById}
          action={() => console.log("delete")}
          label="Delete"
        />
      );
    });

    const mappedExternalMemes = externalMemes.map(element => {
      return (
        <Meme
          key={element.id}
          inCollection={false}
          name={element.name}
          url={element.url}
          action={() => this.postMemeToCollection(element)}
          label="Add Meme"
        />
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
