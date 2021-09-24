import React, { Component } from 'react';


class FavouriteMovie extends Component {


    render() {
        return (
            <div>
                {this.props.profiles.map((profile)=>{
                    const movies=this.props.movies;
                    const users=this.props.users;
                    // console.log(users,"\n",movies)
                    const userName = users[ profile.userID].name;
                    console.log(userName);//test user name
                    const favMovieName = movies[profile.favoriteMovieID].name;
                    console.log(favMovieName)
                    return(
                        //Fixme this give me  incorrect data output
                        <li key={profile.id}>

                            <p>{`${userName}\'s favorite movie is ${favMovieName}.`}</p>
                        </li>
                    )
                })}
            </div>
        )
    }
}

export default FavouriteMovie

//> Jane Cruz's favorite movie is Planet Earth 1.
