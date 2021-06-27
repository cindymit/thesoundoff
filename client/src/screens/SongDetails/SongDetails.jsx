import "./SongDetails.css";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
// import Comments from "../components/Comments/Comments";

import { getOneSong } from "../../services/songs";

export default function SongDetails(props) {
  const [song, setSong] = useState({});
  const { comments, handleDelete } = props;
  const { id } = useParams();

  useEffect(() => {
    const fetchSong = async () => {
      const songData = await getOneSong(id);
      setSong(songData);
    };
    fetchSong();
  }, [id]);

  return (
    <div className="details-container">
      <div className="img-container">
        <h1>Image</h1>
        <img src={song.image_url} alt="album-cover" />
      </div>
      <div className="details-container">
        <h1>Details</h1>
        <p>Artist: {song.artist}</p>
        <p>Song Title: {song.title}</p>
        <p>Genre: {song.genre}</p>
        <p>Album: {song.album}</p>
        <p>Year Released: {song.year_released}</p>
      </div>
      <div className="button-container">
        <Link to='/songs/:id/edit'><button>Edit</button></Link>
        <Link to='/songs'><button onClick={() => handleDelete(song.id)}>Delete</button></Link>
      </div>
      <div>
        <h1>Comments</h1>
        <div className="comments-container">
          <h3>This is where the comments go!</h3>
          {/* <Comments /> */}
        </div>
      </div>
      <Link to="/songs">
        <button>Back to All Songs</button>
      </Link>
    </div>
  );
}
