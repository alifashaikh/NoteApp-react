import React from "react";
import NotesList from "../components/notes-list";

import { Link } from "react-router-dom";

class IndexPage extends React.PureComponent {
  constructor(props) {
    super(props);

    let notes = Object.values(props.notes);
    notes.sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));

    this.state = { notes };
  }

  render() {
    let { notes } = this.state;

    if (!notes.length) {
      return (
        <div className="app-intro">
          <h2>Welcome!</h2>
          <p>
            You don't have any notes.{" "}
            <Link className="btn" to="/new">
              Click Here
            </Link>{" "}
            for adding your first note!
          </p>

          <hr />
        </div>
      );
    }

    return (
      <div>
        <h2>Notes</h2>
        <NotesList notes={this.state.notes} />
      </div>
    );
  }
}

export default IndexPage;
