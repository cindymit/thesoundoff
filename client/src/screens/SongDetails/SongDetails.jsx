import "./SongDetails.css";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Comments from "../../components/Comments/Comments";

import { getOneSong } from "../../services/songs";
import { createComment } from "../../services/comments";

export default function SongDetails(props) {
  const [song, setSong] = useState(null);
  const { comments, handleDelete } = props;
  const { id } = useParams();

  useEffect(() => {
    const fetchSong = async () => {
      const songData = await getOneSong(id);
      setSong(songData);
    };
    fetchSong();
  }, [id]);

  const handleCreate = async (commentData) => {
    const newComment = await createComment({ ...commentData, song_id: id });
    setSong(prevState => ({
      ...prevState,
      comments: [...prevState.comments, newComment]
    }))
  }

  return (
    <div className="details-container">
      <div className="img-container">
        <h1>Image</h1>
        <img src={song?.image_url} alt="album-cover" />
      </div>
      <div className="details-container">
        <h1>Details</h1>
        <p>Artist: {song?.artist}</p>
        <p>Song Title: {song?.title}</p>
        <p>Genre: {song?.genre}</p>
        <p>Album: {song?.album}</p>
        <p>Year Released: {song?.year_released}</p>
      </div>
      <div className="button-container">
        <Link to={`/songs/${song?.id}/edit`}><button>Edit</button></Link>
        <Link to='/songs'><button onClick={() => handleDelete(song?.id)}>Delete</button></Link>
      </div>
      <div>
        <Comments comments={song ? song.comments : []} handleCreate={handleCreate} />
        {/* <h1>Comments</h1>
        <div className="comments-container">
          <h3>This is where the comments go!</h3>
          {song?.comments.map((comment) => (
            <p key={comment.id}>{comment.content}</p>
          ))}
        </div> */}
      </div>
      <Link to="/songs">
        <button>Back to All Songs</button>
      </Link>
    </div>
  );
}
