export const initialState = {
  user: null,
  playlist: [],
  playing: false,
  item: null,
  // hapus kalo mau masuk production
  token: null,
  //   "BQCvhqe7KSrqyGWOg1rmxHtRmOGWhmnfn0LEydCnBWeKMj5LaDE7_WxIYDbWNSXxec805ujvkplgYho4Lj5SGk4V7gdTE7bw8dHqjF2lM2Lr-iFOkqkFCkc3Ymj_oVLErAIyi2JSWm7pFsMc1bAQeEr_5agsF5k",
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };

    case "SET_DISCOVERY_WEEKLY":
      return {
        ...state,
        discovery_weekly: action.discovery_weekly,
      };
    default:
      return state;
  }
};

export default reducer;
