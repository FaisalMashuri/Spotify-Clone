export const authEnpoint = "https://accounts.spotify.com/authorize";

const redirectUri = "http://localhost:3000";

const clientId = "6c38e620c3284821bbdb34fc6811769c";
const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

export const getTokenFromUrl = () => {
  return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial, item) => {
      let parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);
      return initial;
    }, {});
};
export const loginUrl = `${authEnpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scopes=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;
