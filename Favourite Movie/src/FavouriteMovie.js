import React, { Component } from 'react';
import  listOfMovies from './listOfMovies.js';


class FavouriteMovie extends Component {
    render() {
        return (
            <div>
                {
                    /*//4. Exercise 1 - Passing Data
                    this.props.profiles.map((profile)=>{
                    const movies=this.props.movies;
                    const users=this.props.users;
                    // console.log(users,"\n",movies)
                    const userName = users[ profile.userID].name;
                    console.log(userName);//test user name
                    const favMovieName = movies[profile.favoriteMovieID].name;
                    console.log(favMovieName)
                    return(
                        <li key={profile.id}>

                            <p>{`${userName}\'s favorite movie is ${favMovieName}.`}</p>
                        </li>
                    )*/

                    //5. Exercise 2 - Passing Data
                    this.props.profiles.map((profile)=>{
                        const movies=this.props.movies;
                        const users=this.props.users;
                        // console.log(users,"\n",movies)
                        const userName = users[ profile.userID].name;
                        // console.log(userName);//test user name
                        const favMovieName = movies[profile.favoriteMovieID].name;
                        // console.log(favMovieName)
                        // if(favMovieName){
                        //     return ()=>{
                        //         <h2>{favMovieName}</h2>
                        //         <p>Liked By:</p>
                        //         <ul>
                        //             <li>{userName}</li>
                        //         </ul>
                        //     }
                        //
                        if(profile.favoriteMovieID===movies.id){
                            return(<listOfMovies favMovieName={favMovieName} userName={userName} profile={profile}/>)
                        }


                })}
            </div>
        )
    }
}

export default FavouriteMovie

//> Jane Cruz's favorite movie is Planet Earth 1.
