import { Link } from "react-router-dom";
import { Fragment } from "react";

export default function Songs(props) {
  const { songs } = props;

  return (
    <div className="songs-page">
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
              <img src={song.image_url} alt="album-cover" />
              <p>{song.artist}</p>
              <p>{song.title}</p>
            </Link>
          </Fragment>
        ))}
      </div>
    </div>
  );
}
