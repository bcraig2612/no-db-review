import React, { Component } from "react";

export default class Meme extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newName: ""
    };
  }
  render() {
    const {
      action,
      id,
      name,
      url,
      label,
      updateMemeById,
      inCollection
    } = this.props;
    console.log("in Meme", this.state.newName);

    return (
      <div>
        <span>{name}</span>
        <img src={url} alt="" />
        <button onClick={action}>{label}</button>
        {inCollection ? (
          <div>
            <input
              onChange={e =>
                this.setState({
                  newName: e.target.value
                })
              }
              value={this.state.newName}
            />
            <button onClick={() => updateMemeById(id, this.state.newName)}>
              Update Name
            </button>
          </div>
        ) : null}
      </div>
    );
  }
}
