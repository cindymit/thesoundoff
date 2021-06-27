import "./SongDetails.css";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

import { getOneSong } from "../../services/songs";

export default function SongDetails(props) {
  const [song, setSong] = useState({});
  // const { comments } = props;
  const { id } = useParams();

  useEffect(() => {
    const fetchSong = async () => {
      const songData = await getOneSong(id);
      setSong(songData);
    };
    fetchSong();
  }, [id]);

  return (
    <div>
      <h1>Song Details</h1>
      {/* {songInfo?.songs.map((song) => (
        <p key={song.id}></p>
      ))} */}
      <div className="img-container">
        <h1>Image</h1>
        <img src={song.image_url} />
      </div>
      <div className="details-container">
        <h1>Details</h1>
        <p>Artist: {song.artist}</p>
        <p>Song Title: {song.title}</p>
        <p>Genre: {song.genre}</p>
        <p>Album: {song.album}</p>
        <p>Year Released: {song.year_released}</p>
      </div>
      <div>
        <h1>Comments</h1>
        {/* {comments.map((comment) => (
          <p key={comment.id}>{comment.content}</p>
        ))} */}
      </div>
      <Link to="/songs">
        <button>Back to All Songs</button>
      </Link>
    </div>
  );
}
