import Comments from "./components/Comments";

function App() {
  return (
    <div>
      <h1>Comment Section</h1>
      <Comments
        // commentsUrl="http://localhost:3000/comments"
        currentUserId="1"
      />
    </div>
  );
}

export default App;
