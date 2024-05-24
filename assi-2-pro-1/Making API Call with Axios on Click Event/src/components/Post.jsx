function Post({ image, title,price,category,description,rating }) {
  return (
    <div style={{
      width: "500px",
      padding:"10px",
      margin:"20px 350px",
      boxShadow:"2px 4px 4px 4px black",
      borderRadius:"10px"
      }}>
      <img style={{
        width:"200px",
        height:"200px"
      }} src={image} alt={title}/>
      <h1>Title: {title}</h1>
      <h2>Price: {price}</h2>
      <h3>Category: {category}</h3>
      <p>Description: {description}</p>
      <p>Rating: {rating.rate}</p>
    </div>
  );
}

export default Post;
