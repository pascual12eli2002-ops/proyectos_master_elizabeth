const Tweet = ({ tweet, onLike }) => {
  return (
    <div className="tweet">
      <h4>@usuario</h4>

      <p>{tweet.text}</p>

      <button onClick={() => onLike(tweet.id)}>
        ❤️ {tweet.likes}
      </button>
    </div>
  );
};

export default Tweet;