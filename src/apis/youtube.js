import axios from "axios";

//AIzaSyBf-mBYkmKoyfGEBInvrtMxeZuMQBQGiho

const KEY = "AIzaSyCrmISQFeq6mMm90La3cX6PRLtM15eYLrk";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
