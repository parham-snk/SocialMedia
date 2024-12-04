import react from "react";

import Post from "./components/Post";
import AddPost from "./components/AddPost";


const Home=props=>{
    return(
        <div className="HomePage">
            <AddPost/>
            <Post/>
            <Post/>
            <Post/>
        </div>
    )
}

export default Home;