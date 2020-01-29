import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import AddFriends from "./AddFriends";


class FriendsList extends React.Component {
    
    state = {
        friends: []
    }
    
    componentDidMount() {
        this.getData();
    }
    
    getData = () => {
        axiosWithAuth()
        .get('/api/friends')
        .then(res => {
          console.log("this is response", res.data)
            this.setState({
                friends: res.data
            })
           
      
        })
        .catch(err => console.log(err));
    };

    
    render() {
        return(
            <div>
                <h1>Friends List</h1>
               <AddFriends props={this.state.friends}/>
                {this.state.friends.map(friend => {
                    return (
                        <div>
                            <h2>{friend.name}</h2>
                            <p>Age: {friend.age}</p>
                            <p>Email: {friend.email}</p>
                        </div>
                    )
                })}
            </div>
        )
    }
}
export default FriendsList;