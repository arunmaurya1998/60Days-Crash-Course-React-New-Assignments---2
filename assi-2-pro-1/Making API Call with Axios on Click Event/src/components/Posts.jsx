import { useState } from "react";
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
    setError(false);
    try {
      let res = await axios({
        method: "get",
        url: "https://fakestoreapi.com/products",
      });

      setPosts(res?.data);
      setLoading(false);
      // console.log(res.data)
    } catch (error) {
      setError(true);
      setLoading(false);
    }
  }

  if (error) {
    return <ErrorIndicator />;
  }

  if (loading) {
    return <LoadingIndicator />;
  }

  return (
    <div
      style={{
        textAlign: "center",
      }}
    >
      <button onClick={fetchAndUpdateData}>
        Click to display list of posts
      </button>
      <h1>List of Posts</h1>

      {posts?.map((data) => (
        <Post {...data} key={data.id} />
      ))}
    </div>
  );
}

export default Posts;
