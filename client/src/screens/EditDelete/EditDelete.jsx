import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./EditDelete.css";

export default function EditDelete(props) {
  const [songData, setSongData] = useState({
    artist: "",
    title: "",
    genre: "",
    album: "",
    year_released: "",
    image_url: "",
  });

  const { artist, title, genre, album, year_released, image_url } = songData;
  const { songs, handleUpdate } = props;
  const { id } = useParams();

  useEffect(() => {
    const prefillSongData = () => {
      const singleSong = songs.find((song) => song.id === Number(id));
      setSongData({
        artist: singleSong.artist,
        title: singleSong.title,
        genre: singleSong.genre,
        album: singleSong.album,
        year_released: singleSong.year_released,
        image_url: singleSong.image_url,
      });
    };
    if (songs.length) {
      prefillSongData();
    }
  }, [songs]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSongData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="edit-container">
      <div className="image-container">
        <img
          className="edit-song-image"
          src={image_url}
          alt={artist}
        />
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleUpdate(id, songData);
          }}
        >
          <input
            className="edit-image-url"
            placeholder="Image URL"
            value={image_url}
            name="image_url"
            required
            onChange={handleChange}
          />
        </form>
      </div>
      <form
        className="edit-song"
        onSubmit={(e) => {
          e.preventDefault();
          handleUpdate(id, songData);
        }}
      >
        <input
          className="edit-artist"
          placeholder="Artist"
          value={artist}
          name="artist"
          required
          onChange={handleChange}
        />
        <input
          className="edit-title"
          placeholder="Song Title"
          value={title}
          name="title"
          required
          onChange={handleChange}
        />
        <input
          className="edit-genre"
          placeholder="Genre"
          value={genre}
          name="genre"
          required
          onChange={handleChange}
        />
        <input
          className="edit-album"
          placeholder="Album"
          value={album}
          name="album"
          required
          onChange={handleChange}
        />
        <input
          className="edit-year"
          placeholder="Year Released"
          value={year_released}
          name="year_released"
          required
          onChange={handleChange}
        />
        <button type="submit" className="save-button">
          Save
        </button>
      </form>
    </div>
  );
}
