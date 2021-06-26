import { Switch, Route, useHistoryy } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Main.css";
import Comments from "./components/Comments/Comments";
import AllSongs from "./screens/AllSongs/AllSongs";
import CreateSong from "./screens/CreateSong/CreateSong";
import SongDetails from "./screens/SongDetails/SongDetails";
import EditDelete from "./screens/EditDelete/EditDelete";
import { getAllComments } from "../services/comments";
import { deleteSong, getAllSongs, postSong, putSong } from "../services/songs";

export default function Main() {
  const [comments, setComments] = useState([]);
  const [songs, setSongs] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const fetchComments = async () => {
      const commentList = await getAllComments();
      setComments(commentList);
    };
    fetchComments();
  }, []);

  useEffect(() => {
    const fetchSongs = async () => {
      const songList = await getAllSongs();
      setSongs(songList);
    };
    fetchSongs();
  }, []);

  const handleCreate = async (formData) => {
    const songItem = await postSong(formData);
    setSongs((prevState) => [...prevState, songItem]);
    history.push("/songs");
  };

  const handleUpdate = async (id, formData) => {
    const songItem = await putSong(id, formData);
    setSongs((prevState) =>
      prevState.map((song) => {
        return song.id === Number(id) ? songItem : song;
      })
    );
    history.push("/songs");
  };

  const handleDelete = async (id) => {
    await deleteSong(id);
    setSongs((prevState) => prevState.filter((song) => song.id !== id));
  };

  return (
    <div className="main">
      <h1>This is the main container!</h1>
      <Switch>
        <Route path="/songs/:id/edit">
          <EditDelete songs={songs} handleUpdate={handleUpdate} />
        </Route>
        <Route path="/songs/:id">
          <SongDetails comments={comments} />
        </Route>
        <Route path="/songs/new">
          <CreateSong handleCreate={handleCreate} />
        </Route>
        <Route path="/songs">
          <AllSongs songs={songs} handleDelete={handleDelete} />
        </Route>
        <Route path="/comments">
          <Comments comments={comments} />
        </Route>
      </Switch>
    </div>
  );
}
