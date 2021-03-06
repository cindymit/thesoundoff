import { Link } from "react-router-dom";
import { Fragment } from "react";
import "./Songs.css";

export default function Songs(props) {
  const { songs } = props;

  return (
    <div className="songs-container">
      <div className="intro">
        <h3>Browse All Music</h3>
        <p>
          Check out what other users are listening to and sound off in the
          discussion.
        </p>
      </div>
      <div className="song-card">
        {songs.map((song) => (
          <Fragment key={song.id}>
            <Link to={`/songs/${song.id}`}>
              <div className="single">
                <img src={song.image_url} alt="album-cover" />
                <p><strong>{song.artist}</strong></p>
                <p className="title">{song.title}</p>
              </div>
            </Link>
          </Fragment>
        ))}
      </div>
    </div>
  );
}
