import React ,{Component} from "react";
import UserList from "./UserList.js"

class MovieCard extends Component{
    render(){

    const{users,usersWhoLikedMovie,movieInfo }=this.props;

    return(
        <li key={movieInfo.id}>
            <h2>{ `${movieInfo.id}. ${movieInfo.name}` } </h2>
            <h3> Liked By: </h3>
            <UserList
                usersWhoLikedMovie={usersWhoLikedMovie}
                users={users}
            />
        </li>
    )

    }
}

export default MovieCard;