import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card'
import "./Post.css";

// Using match to pass params and id for the post to be displayed
const Post = ({ match}) => {
  useEffect(() => {
    fetchItem();
  }, []);
  console.log(match)
  const [item, setItem] = useState([]);
  const [comments, setComments] = useState([]);
  const [authors, setAuthor] = useState([]);
  
//   fetching data from API
  const fetchItem = async () => {
  const fetchItem = await fetch(`https://jsonplaceholder.typicode.com/posts/${match.params.id}`)
  const fetchComments = await fetch(`https://jsonplaceholder.typicode.com/posts/${match.params.id}/comments`)
  const comments = await fetchComments.json();
  const item = await fetchItem.json();
  setItem(item);
  setComments(comments)
  const fetchAuthor = await fetch(`https://jsonplaceholder.typicode.com/users/${item.userId}`)
  const authors = await fetchAuthor.json();
  setAuthor(authors);
  // console.log(authors);
  // console.log(comments);
  }

  return (
    <>
    <div style={{padding: "5px 5px 5px 5px", height: "auto", maxWidth: "100%", minWidth:"500px" }}>
//     using React-Bootstrap cards to display the post data
    <Card style={{width:'100%', alignItems: 'center', textAlign: 'left'}}>
    <Card.Body>
    <Card.Title id="title" style={{fontSize: "calc(20px + 2vmin)", textAlign:"center"}}>{item.title}</Card.Title>
    <Card.Text id="text" style={{fontSize: "calc(10px + 2vmin)", textAlign:"center"}}>{item.body}</Card.Text>
    </Card.Body>
    </Card>
    </div>
    <div className="look">
    <h4 className="comm">Comments:</h4>
    {comments.map((comment, index) => (
        <><h5 className="comm"key={comment.id}>{index+1}.) {comment.name}</h5>
        <p className="comtxt">{comment.body}</p></>
      ))}
      <div className="author">
    <h4>About the author:</h4>
    <h5>{authors.name}</h5>
    <h5>Email: {authors.email}</h5>
    <h5>Contact: {authors.phone}</h5>
    <h5>Website: {authors.website}</h5>
      </div>
    </div>
    </>
  )
}

export default Post
