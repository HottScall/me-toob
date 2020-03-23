import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";

const KEY = "AIzaSyBLbb8DAJ6eaz0By47QZrKmx2mjiSslP-g";

class App extends React.Component {
  onTermSubmit = term => {
    youtube.get("/search", {
      params: {
        q: term,
        part: "snippet",
        key: KEY,
        maxResults: 5
      }
    });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
      </div>
    );
  }
}
export default App;
