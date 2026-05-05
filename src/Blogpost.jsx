function BlogPost({ post }) {
  return (
    <div>
      <h2>{post.title}</h2>
      <p><strong>{post.author}</strong></p>
      <p>{post.content}</p>
    </div>
  );
}

export default BlogPost;