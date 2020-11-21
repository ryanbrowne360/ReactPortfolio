import React from "react";
import MyPic from "my-react-app/MyPic.jpg"

function Home() {
  return (
    <div>
      <h1>Welcome to my website!</h1>
      <img src={MyPic}/>
    </div>

  );
}

export default Home;