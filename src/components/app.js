import React, { Component } from "react";

import Photos from "./photos";

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <h1>uploading to clode </h1>
        <h2>using any files</h2>
        <Photos />
        <div class="footer">
          <h2>CS260 link : </h2>
          <a href="https://github.com/kiannalie/project-5"> github here</a>
        </div>
      </div>
    );
  }
}
