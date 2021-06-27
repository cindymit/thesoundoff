import "./CreateSong.css";
import { useState } from "react";

export default function CreateSong(props) {
  const [formData, setFormData] = useState({
    artist: "",
    title: "",
    genre: "",
    album: "",
    year_released: "",
    image_url: "",
  });
  const { artist, title, genre, album, year_released, image_url } = formData;
  const { handleCreate } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="create-container">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleCreate(formData);
        }}
      >
        <h1>Tell us about your favorite song here!</h1>
        <input
          type="text"
          name="artist"
          value={artist}
          placeholder="Artist"
          onChange={handleChange}
        />
        <input type="text" name="title" value={title} placeholder="Title" onChange={handleChange} />
        <input type="text" name="genre" value={genre} placeholder="Genre" onChange={handleChange} />
        <input type="text" name="album" value={album} placeholder="Album" onChange={handleChange} />
        <input
          type="text"
          name="year_released"
          value={year_released}
          placeholder="Year Released"
          onChange={handleChange}
        />
        <input
          type="text"
          name="image_url"
          value={image_url}
          placeholder="Image URL"
          onChange={handleChange}
        />
      </form>
      <button>Submit</button>
    </div>
  );
}
