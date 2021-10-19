import React, { Component } from 'react';
import './App.css';
import logo from './logo.svg';
import Dashboard from './Dashboard.js';
import MovieCardsList from './MovieCardsList';

/*
Use React and the data below to display a list of users alongside their favorite movies.

For detailed instructions, refer to instructions.md.
*/

const profiles = [
  {
    id: 1,
    userID: '1',
    favoriteMovieID: '1',
  },
  {
    id: 2,
    userID: '2',
    favoriteMovieID: '1',
  },
  {
    id: 3,
    userID: '4',
    favoriteMovieID: '5',
  },
  {
    id: 4,
    userID: '5',
    favoriteMovieID: '2',
  },
  {
    id: 5,
    userID: '3',
    favoriteMovieID: '5',
  },
  {
    id: 6,
    userID: '6',
    favoriteMovieID: '4',
  },
];

const users = {
  1: {
    id: 1,
    name: 'Jane Cruz',
    userName: 'coder',
  },
  2: {
    id: 2,
    name: 'Matthew Johnson',
    userName: 'mpage',
  },
  3: {
    id: 3,
    name: 'Autumn Green',
    userName: 'user123',
  },
  4: {
    id: 4,
    name: 'John Doe',
    userName: 'user123',
  },
  5: {
    id: 5,
    name: 'Lauren Carlson',
    userName: 'user123',
  },
  6: {
    id: 6,
    name: 'Nicholas Lain',
    userName: 'user123',
  },
};

const movies = {
  1: {
    id: 1,
    name: 'Planet Earth 1',
  },
  2: {
    id: 2,
    name: 'Selma',
  },
  3: {
    id: 3,
    name: 'Million Dollar Baby',
  },
  4: {
    id: 4,
    name: 'Forrest Gump',
  },
  5: {
    id: 5,
    name: 'Get Out',
  },
};

/*
class App extends Component {

  constructor(props) {
    super(props);
    this.usersByMovie={};
    /!*
    We can map the users by the movie they liked.
    *!/
    profiles.forEach(profile=>{
      const movieID=profile.favoriteMovieID;

      if(this.usersByMovie[movieID]){
        this.usersByMovie[movieID].push(profile.userID);
      }else{
        this.usersByMovie[movieID]=[profile.userID];
        console.log(`this.usersByMovie[movieID]=[profile.userID]`
            ,this.usersByMovie[movieID]=[profile.userID]);//test output
      }
    })
  }
  render() {
    return (
        <div>
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">ReactND - Coding Practice</h1>
          </header>
          <h2>Favorite Movies</h2>
          <Dashboard
          usersByMovie={this.usersByMovie}
          movies={movies}
          users={users}
          />
        </div>
    );
  }
}
*/
function App (props){
  return(
      <div>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <h1>How Popular is Your Favorite Movie?</h1>
        <MovieCardsList profiles={profiles} movies={movies} users={users} />
      </div>
  )
}
export default App;

/*output solution
* Favorite Movies
Jane Cruz's favorite movie is "Planet Earth."

Matthew Johnson's favorite movie is "Planet Earth."

John Doe's favorite movie is "Get Out."

Lauren Carlson's favorite movie is "Selma."

Autumn Green's favorite movie is "Get Out."

Nicholas Lain's favorite movie is "Forrest Gump."*/

/*my output
* Favorite Movies
Jane Cruz's favorite movie is Planet Earth 1.

Matthew Johnson's favorite movie is Planet Earth 1.

John Doe's favorite movie is Get Out.

Lauren Carlson's favorite movie is Selma.

Autumn Green's favorite movie is Get Out.

Nicholas Lain's favorite movie is Forrest Gump.*/