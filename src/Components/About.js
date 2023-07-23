import React from "react";

export default function About(props) {
  return (
    <div className="container my-3">
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              style={{
                color: props.mode === "light" ? "black" : "white",
                backgroundColor: props.mode === "dark" ? "grey" : "white",
              }}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <strong>About TextUtils</strong>{" "}
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div
              className="accordion-body"
              style={{
                color: props.mode === "light" ? "black" : "white",
                backgroundColor: props.mode === "dark" ? "grey" : "white",
              }}
            >
              This textUtils tool we’ve developed to help
              you find and calculate the characters of your written content. It
              is built to deliver accurate results and tell how long or short
              your content is. But this free text counter is more than just a
              tool for showing you the number of words and characters in your
              content.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              style={{
                color: props.mode === "light" ? "black" : "white",
                backgroundColor: props.mode === "dark" ? "grey" : "white",
              }}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              <strong>Why use TextUtils</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div
              className="accordion-body"
              style={{
                color: props.mode === "light" ? "black" : "white",
                backgroundColor: props.mode === "dark" ? "grey" : "white",
              }}
            >
              Well, if you’re wondering why you should be using an TextUtils then try the character counter of your content manually. Before you get to line #5, you will realize that the word counting exercise is quite complex, if not practically frustrating. And besides, who wants to waste precious time counting a lengthy document, when you can quickly get help from a word counter like ours?
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              style={{
                color: props.mode === "light" ? "black" : "white",
                backgroundColor: props.mode === "dark" ? "grey" : "white",
              }}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              <strong>How to use Textutils</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div
              className="accordion-body"
              style={{
                color: props.mode === "light" ? "black" : "white",
                backgroundColor: props.mode === "dark" ? "grey" : "white",
              }}
            >
            To use TextUtils free online word and character count tool, just type or paste in your text, and TextUtil will instantly calculate the number of words and characters for you. 
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
