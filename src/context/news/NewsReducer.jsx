const NewsReducer = (state, action) => {
  switch (action.type) {
    case "NEWS_DATA":
      return {
        ...state,
        allNews: action.payload.news,
        topic: action.payload.topic,
      };

    default:
      return state;
  }
};

export default NewsReducer;
