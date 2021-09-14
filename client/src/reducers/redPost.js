export default (redPosts = [], action) => {
  switch (action.type) {
    case "FETCH_ALL":
      return action.payload;
    case "CREATE":
      return [...redPosts, action.payload];
    case "UPDATE":
      console.log("update post redux...");
      return redPosts.map((post) =>
        post._id === action.payload._id ? action.payload : post
      );
    case "LIKE":
      console.log("update like redux...");
      return redPosts.map((post) =>
        post._id === action.payload._id ? action.payload : post
      );
    case "DELETE":
      return redPosts.filter((post) => post._id !== action.payload);
    default:
      return redPosts;
  }
};
