import React from "react";
import Weather from "./Weather";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="London,CA" />

        <footer>
          This project was coded by 🇨🇦{" "}
          <a
            rel="noopener noreferrer"
            href="https://www.shecodes.io/graduates/64786-jen-luchka"
            target="_blank"
          >
            Jen Luchka
          </a>{" "}
          and is{" "}
          <a
            rel="noopener noreferrer"
            href="https://github.com/modestco/2023"
            target="_blank"
          >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            rel="noopener noreferrer"
            href="https://jovial-swan-984cd1.netlify.app/"
            target="_blank"
          >
            hosted on Netlify.
          </a>
        </footer>
      </div>
    </div>
  );
}
