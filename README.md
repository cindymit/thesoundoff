# thesoundoff.

- [Overview](#overview)
- [MVP](#mvp)
  - [Goals](#goals)
  - [Libraries and Dependencies](#libraries-and-dependencies)
  - [Client (Front End)](#client-front-end)
    - [Wireframes](#wireframes)
    - [Component Tree](#component-tree)
    - [Component Architecture](#component-architecture)
    - [Time Estimates](#time-estimates)
  - [Server (Back End)](#server-back-end)
    - [ERD Model](#erd-model)
- [Post-MVP](#post-mvp)
- [Code Showcase](#code-showcase)
- [Code Issues & Resolutions](#code-issues--resolutions)

<br>

## Overview

_**thesoundoff.** is a website/app where music lovers from all over can post their favorite songs at the moment! Unauthorized users will be able to access all songs posted and its details and comment section. However, creating a song post and commenting requires registration. From there, authorized users may create a new song post, edit/delete any of their existing post(s), and participate in the comment section. Check out what fellow users are listening to and start sounding off!


<br>

## MVP

### Goals

- Full CRUD
- Minimum 8 rendered components
- Register for new account
- Login/logout of current account
- Render data from Ruby on Rails API
- Authorized users can create new song post
- CSS Styling and layout arrangement using Flexbox/Grid
- Media query/responsive design for tablet, and mobile
- Deploy the fully functional front-end
- Deploy the back-end via Heroku

<br>

### Libraries and Dependencies

|     Library      | Description                                  |
| :--------------: | :------------------------------------------- |
|      Axios       | HTTP requests to endpoints and perform CRUD  |
|      React       | Building out the user interface		          |
|   React Router   | Define multiple routes in the application    |
| React-Router-Dom | Dynamic client-side routing		              |
| React SemanticUI | Modern front-end developement framework      |
|     Express      | Provide server-side logic for application    |
|  Express Router  | Create router in app to handle requests      |
|    Bootstrap     | Front-end framework template for UI elements |

<br>

### Client (Front End)

#### Wireframes

![thesoundoff - Desktop Wireframe](https://www.figma.com/file/JxQwkb84fn8nv2HNyReXXD/thesoundoff.-Desktop-View?node-id=0%3A1)

- Desktop Landing

![thesoundoff - Mobile Wireframe](https://www.figma.com/file/gJc3wdqofIAIGXTZIDDbEx/thesoundoff.-Mobile-Wireframe?node-id=0%3A1)

- Mobile Landing

#### Component Tree

[Component Tree](https://whimsical.com/thesoundoff-component-hierarchy-K4QJJyRbbg97nELsbQxgnu)


#### Component Architecture

```

src
|__ assets/
      |__ fonts
      |__ graphics
      |__ images
      |__ mockups
|__ components/
      |__ Layout
	      |_ Layout.jsx
	      |_ Layout.css
      |__ Nav
	      |_ Nav.jsx
	      |_ Nav.css
      |__ Footer
	      |_ Footer.jsx
	      |_ Footer.css
      |__ Songs
	      |_ Songs.jsx
	      |_ Songs.css
      |__ Comments
	      |_ Comments.jsx
	      |_ Comments.css
      |__ Login
	      |_ Login.jsx
	      |_ Login.css
      |__ Logout
	      |_ Logout.jsx
	      |_ Logout.css
      |__ Signup
	      |_ Signup.jsx
	      |_ Signup.css
      |__ Home
	      |_ Home.jsx
	      |_ Home.css
      |__ CreateSong
	      |_ CreateSong.jsx
	      |_ CreateSong.css
      |__ SongDetails
	      |_ SongDetails.jsx
	      |_ SongDetails.css
      |__ AllSongs
	      |_ AllSongs.jsx
	      |_ AllSongs.css
      |__ EditDelete
	      |_ EditDelete.jsx
	      |_ EditDelete.css
|__ services/
      |__ api-config.js
      |__ songs.js
      |__ users.js
      |__ comments.js

```

#### Time Estimates

| Task                 | Priority | Estimated Time | Time Invested | Actual Time |
| -------------------- | :------: | :------------: | :-----------: | :---------: |
| Project Research     |          |     3 hrs      |               |             |
| Project Approval     |          |     3 hrs      |               |             |
| React App Set-up     |          |     3 hrs      |               |             |
| Component Set-up     |          |     3 hrs      |               |             |
| Create user model    |          |     1 hrs      |               |             |
| Create song model    |          |     1 hrs      |               |             |
| Create comment model |          |     1 hrs      |               |             |
| User controller      |          |     2 hrs      |               |             |
| Song controller      |          |     2 hrs      |               |             |
| Comment controller   |          |     2 hrs      |               |             |
| Homepage	           |          |     3 hrs      |               |             |
| Authorization        |          |     3 hrs      |               |             |
| Login Form           |          |     2 hrs      |               |             |
| Signup Form          |          |     2 hrs      |               |             |
| Song Details         |          |     3 hrs      |               |             |
| Comments	           |          |     3 hrs      |               |             |
| Create Song Form     |          |     2 hrs      |               |             |
| Edit/Delete	         |          |     3 hrs      |               |             |
| CSS/Flexbox/Grid     |          |     3 hrs      |               |             |
| Mobile Media Query   |          |     3 hrs      |               |             |
| Tablet Media Query   |          |     3 hrs      |               |             |
| -                    |     -    |       -        |       -       |      -      |
| TOTAL                |          |     51 hrs     |               |             |

<br>

### Server (Back End)

#### ERD Model

[thesoundoff - ERD](https://drive.google.com/file/d/1H_7rSYHqIgHN8RjhcWfAwxDvbB3skKzV/view?usp=sharing)
<br>

***

## Post-MVP

- Playlist table
- User favorites
- Live comment section
- 'Top Songs' image carousel
- Filter songs alphetically and numerically in ascending or descending fashion
- Search by song title
- Direct users to song using Spotify link

***

## Code Showcase

This is my mobile media query for my layout screen. I asked my fellow classmate, Cameron for help because I was having trouble positioning my layout correctly. He taught me a lot of different techniques like "!important" which adds more important to a property/value than normal, using "*" to grab all children within the parent components, and display: unset which resets a property to its inherited value.

```
@media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
  .layout-container {
    display: grid;
  }
  header {
    display: flex;
    flex-wrap: wrap;
  }
  .authorized-links {
    display: flex;
    flex-direction: row !important;
    margin: 0 auto;
    padding: 5px;
  }
}
```

## Code Issues & Resolutions

