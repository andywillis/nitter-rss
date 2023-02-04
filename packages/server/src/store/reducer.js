export default function reducer(state, action) {

  const { type, payload } = action;

  switch (type) {

    case 'addFeed': {
      return {
        ...state,
        feed: payload
      };
    }

    case 'mergeTweets': {
      return {
        ...state,
        tweets: [ ...state.tweets, ...payload ]
      }
    }

    case 'replaceTweets': {
      return {
        ...state,
        tweets: payload
      }
    }

    default: return state;

  }

}
