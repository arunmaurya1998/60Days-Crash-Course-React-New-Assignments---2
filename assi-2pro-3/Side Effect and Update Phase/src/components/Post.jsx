function Post({ title, body,id,userId }) {
  return (
    
        <div style={{
          width:"1000px",
          padding:"10px 110px",
          margin:"20px 0px",
          boxShadow:"3px 5px 5px 5px black"
        }}>
          <h2>Title : {title}</h2>
          <h3> UserId : {userId}</h3>
          <h3>Id: {id}</h3>
          <p>Body : {body}</p>
        </div>
  );
}

export default Post;
