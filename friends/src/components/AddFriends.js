import React, { useState } from "react";
import axios from "axios";
import { axiosWithAuth } from "../utils/axiosWithAuth";

function AddFriends(props) {
  console.log("this is props in addfriends", props)

  const [newFriend, setNewFriend] = useState({
    //   friend: {
    //       id:Date.now(),
    //       name:"",
    //       age:"",
    //       email:""
    //   }
  });

  const handleChanges = e => {
    console.log("handlechanges run this is new smurf", newFriend)
        setNewFriend({
            ...newFriend,
            [e.target.name]: (e.target.value)
        })
  };

  const addFriend = e => {
    
    axiosWithAuth()
      .post("http://localhost:5000/api/friends", newFriend)
      .then(res => {
        console.log("res after posting", res);
      });
  };

  const handleSubmit = e =>{
   
    addFriend(newFriend)
    console.log("this is newSmurf", newFriend)
   

}

  
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="name"
            value={newFriend.name}
            onChange={handleChanges}
          />
          <input
            type="text"
            name="age"
            placeholder="age"
            value={newFriend.age}
            onChange={handleChanges}
          />
          <input
            type="text"
            name="email"
            placeholder="email"
            value={newFriend.email}
            onChange={handleChanges}
          />

          <button>Add Friend</button>
        </form>
      </div>
    );
  
}

export default AddFriends;
