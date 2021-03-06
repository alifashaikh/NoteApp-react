import React from "react";
import { Link } from "react-router-dom";
import dayjs from "dayjs";

import "./notes-list.css";

function renderDate(updatedAt) {
  let d = dayjs(updatedAt);
  return d.format("MMMM D YYYY, HH:mm");
}

const Note = ({ note: { _id, title, body, updatedAt } }) => (
  <div className="notes-list-item">
    <h2>
      <Link to={`/notes/${_id}`}>{title}</Link>
    </h2>
    <span className="notes-list-date">{renderDate(updatedAt)}</span>
    <button className="btn" onClick={e => this.props.onDelete(Note._id)}>
      Delete
    </button>
  </div>
);

export default ({ notes }) => (
  <div className="notes-list">
    {notes.map(n => (
      <Note note={n} key={`note-${n._id}`} />
    ))}
  </div>
);
