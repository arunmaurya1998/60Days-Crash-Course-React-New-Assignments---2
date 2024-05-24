import { useState, useEffect } from "react";
import axios from "axios";
import Post from "./Post";
import LoadingIndicator from "./LoadingIndicator";
import ErrorIndicator from "./ErrorIndicator";

function Posts() {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(false);

  async function fetchAndUpdateData() {
   setLoading(true);
    try {
     let res = await axios({
      method: "get",
      url:"https://jsonplaceholder.typicode.com/posts?_limit=10"
     })

    setPosts(res?.data)
     setLoading(false)
    } catch (error) {
     setError(false);
     setLoading(false)
    }
  }

  useEffect((()=>{
    fetchAndUpdateData();
  }),[]);

  if (loading) {
    return <LoadingIndicator />;
  }

  if (error) {
    return <ErrorIndicator />;
  }

  return (
    <div>
      <h1>List of Posts</h1>

      {posts?.map ((post,i)=>(
        <Post {...post} key={i} />
      ))}
    </div>
  );
}

export default Posts;
