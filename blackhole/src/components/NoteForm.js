import React from "react";
import { connect } from "react-redux";

class NoteForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: ""
    };
  }

  handleInput = e => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };

  addNote = e => {
    e.preventDefault();
    this.props.history.push("/main-page");
  };

  back = e => {
    e.preventDefault();
    this.props.history.push("/main-page");
  };

  render() {
    return (
      <div className="note-form">
        <h1>Say Goodbye To All Of Your Problems</h1>
        <textarea
          placeholder="Vent it all away..."
          value={this.state.text}
          type="text"
          name="text"
          onChange={this.handleInput}
        />
        <div className="storage-btn">
          <button> Blackhole </button>
          <button onClick={this.addNote}> Store In Satellite</button>
          <button onClick={this.back}>Back</button>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  {}
)(NoteForm);
