import React from 'react';
import MovieCardsFunctionComponents from './MovieCardsFunctionComponents';

function MovieCardsList(props){
    const { profiles, users, movies } =  props;
    const usersByMovie = {};

    profiles.forEach(profile => {
        const movieID = profile.favoriteMovieID;

        if (usersByMovie[movieID]) {
            usersByMovie[movieID].push(profile.userID);
        } else {
            console.log("before usersByMovie[movieID]",usersByMovie[movieID])
            usersByMovie[movieID] = [profile.userID];
            console.log("after usersByMovie[movieID]",usersByMovie[movieID])

        }
    });

    const movieCards = Object.keys(movies).map(id => (
        <MovieCardsFunctionComponents
            key={id}
            users={users}
            usersWhoLikedMovie={usersByMovie[id]}
            movieInfo={movies[id]}
        />
    ));

    /*
    Return JSX
    */
    return <ul>{movieCards}</ul>;
}



export default MovieCardsList;