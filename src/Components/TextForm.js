import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  const [findWord, setFindWord] = useState("");
  const [replaceWord, setReplaceWord] = useState("");

  const handleUpClick = () => {
    setText(text.toUpperCase());
    props.showAlert(" : Converted to Uppercase!", "success");
  };

  const handleLoClick = () => {
    setText(text.toLowerCase());
    props.showAlert(" : Converted to Lowercase!", "success");
  };

  const handleClearClick = () => {
    setText("");
    props.showAlert(" : Text Cleared!", "success");
  };

  const handleAltClick = () => {
    const chars = text.toLowerCase().split("");
    for (let i = 0; i < chars.length; i += 2) {
      chars[i] = chars[i].toUpperCase();
    }
    setText(chars.join(""));
    props.showAlert(" : Capitalize Alternate Characters!", "success");
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert(" : Copied to Clipboard!", "success");
  };

  const handleRemoveSpaces = () => {
    setText(text.split(/[ ]+/).join(" "));
    props.showAlert(" : Extra Spaces Removed!", "success");
  };

  const handleCapitalizeEachWord = () => {
    const newText = text
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");
    setText(newText);
    props.showAlert(" : Capitalized Each Word!", "success");
  };

  const handleReverseText = () => {
    setText(text.split("").reverse().join(""));
    props.showAlert(" : Text Reversed!", "success");
  };

  const handleTitleCase = () => {
    const newText = text
      .toLowerCase()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
    setText(newText);
    props.showAlert(" : Converted to Title Case!", "success");
  };

  const countVowelsAndConsonants = (text) => {
    const vowels = text.match(/[aeiouAEIOU]/g) || [];
    const consonants =
      text.match(/[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]/g) || [];
    return { vowels: vowels.length, consonants: consonants.length };
  };

  const countSentences = (text) => {
    const sentences = text.split(/[.!?]+/).filter(Boolean);
    return sentences.length;
  };

  const handleFindAndReplace = () => {
    const newText = text.replaceAll(findWord, replaceWord);
    setText(newText);
    props.showAlert(
      ` : Replaced "${findWord}" with "${replaceWord}"!`,
      "success"
    );
  };

  const handleSortWords = () => {
    const newText = text.split(" ").sort().join(" ");
    setText(newText);
    props.showAlert(" : Words Sorted Alphabetically!", "success");
  };

  const handleShuffleWords = () => {
    const words = text.split(" ");
    for (let i = words.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [words[i], words[j]] = [words[j], words[i]];
    }
    setText(words.join(" "));
    props.showAlert(" : Words Shuffled!", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleFindChange = (event) => {
    setFindWord(event.target.value);
  };

  const handleReplaceChange = (event) => {
    setReplaceWord(event.target.value);
  };

  const { vowels, consonants } = countVowelsAndConsonants(text);
  const sentenceCount = countSentences(text);

  return (
    <>
      <div
        className="container my-3"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <h2 className="mb-4">{props.heading}</h2>
        <div className="container my-3">
          <textarea
            placeholder="Write your text here"
            className="form-control"
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "light" ? "black" : "white",
            }}
            id="textform"
            value={text}
            onChange={handleOnChange}
            rows="5"
          ></textarea>
        </div>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2 my-2"
          onClick={handleUpClick}
        >
          Convert to UPPERCASE
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2 my-2"
          onClick={handleLoClick}
        >
          Convert to lowercase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2 my-2"
          onClick={handleClearClick}
        >
          Clear
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2 my-2"
          onClick={handleAltClick}
        >
          AlTeRnAtE
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2 my-2"
          onClick={handleCapitalizeEachWord}
        >
          Capitalize Each Word
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2 my-2"
          onClick={handleReverseText}
        >
          Reverse Text
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2 my-2"
          onClick={handleTitleCase}
        >
          Title Case
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2 my-2"
          onClick={handleCopy}
        >
          Copy Text
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2 my-2"
          onClick={handleRemoveSpaces}
        >
          Remove Extra Spaces
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2 my-2"
          onClick={handleSortWords}
        >
          Sort Words
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2 my-2"
          onClick={handleShuffleWords}
        >
          Shuffle Words
        </button>
        <div className="container my-3 ">
          <input
            type="text"
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "light" ? "black" : "white",
            }}
            className="form-control"
            value={findWord}
            onChange={handleFindChange}
            placeholder="Find Word"
          />
          <input
            type="text"
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "light" ? "black" : "white",
            }}
            className="form-control my-2"
            value={replaceWord}
            onChange={handleReplaceChange}
            placeholder="Replace With"
          />
          <button
            disabled={text.length === 0 || findWord === ""}
            className="btn btn-primary mx-2 my-2"
            onClick={handleFindAndReplace}
          >
            Find and Replace
          </button>
        </div>
      </div>

      <div
        className="container my-3"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <h1>Word Counter...</h1>
        <p>
          {text.split(/\s+/).filter((element) => element.length !== 0).length}{" "}
          Words and {text.length} Characters
        </p>
        <p>
          {0.08 *
            text.split(" ").filter((element) => element.length !== 0)
              .length}{" "}
          Average Minutes to Read
        </p>
        <p>
          {vowels} Vowels and {consonants} Consonants
        </p>
        <p>{sentenceCount} Sentences</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter Text to Preview"}</p>
      </div>
    </>
  );
}
