import React from "react";
import marked from "marked";
import dayjs from "dayjs";

import "./show.css";

class ShowPage extends React.PureComponent {
  renderDate() {
    let d = dayjs(this.props.note.updatedAt);
    return d.format("MMMM D YYYY, HH:mm");
  }

  componentWillMount() {
    if (!this.props.note) {
      this.props.history.replace(`/`);
      return;
    }
  }

  render() {
    const { note } = this.props;

    if (!note) {
      return null;
    }

    return (
      <div>
        <h1>{note.title}</h1>
        <div className="note-created">
          {this.renderDate()}
          <button className="btn" onClick={e => this.props.onDelete(note._id)}>
            Delete
          </button>
        </div>
        <div
          className="note-body"
          dangerouslySetInnerHTML={{ __html: marked(note.body) }}
        />
      </div>
    );
  }
}

export default ShowPage;
