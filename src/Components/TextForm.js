import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("Uppercase was Clicked" + text)
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert(" : Converted to Uppercase!", "success")
  };
  const handleLoClick = () => {
    // console.log("Uppercase was Clicked" + text)
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert(" : Converted to Lowercase!", "success")

  };
  const handleClearClick = () => {
    // console.log("Uppercase was Clicked" + text)
    let newText = "";
    setText(newText);
    props.showAlert(" : Text Cleared!", "success")

  };
  const handleAltClick = () => {
    // console.log("Uppercase was Clicked" + text)
    var chars = text.toLowerCase().split("");
    for (var i = 0; i < chars.length; i += 2) {
      chars[i] = chars[i].toUpperCase();
    }

    let newText = chars.join("");
    setText(newText);
    props.showAlert(" : Capitalize Alernate Characters!", "success")

  };

  // const handleCaptClick = () => {
  //   let newText = text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
  //   setText(newText);
  // };

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert(" : Copied to Clipboard!", "success")

  };
  const handleRemoveSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert(" : Extra Spaces Removed!", "success")

  };

//   function countWord() {          
//     var words = document
//         .getElementById("textform").value;
//       var count = 0;
//     var split = words.split(' ');
//     for (var i = 0; i < split.length; i++) {
//         if (split[i] !== "") {
//             count += 1;
//         }
//     }
//     document.getElementById("show")
//         .innerHTML = count;
// }

  const handleOnChange = (event) => {
    // console.log("On Change")
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  // setText("Enter Your Text...")
  return (
    <>
      <div className="container my-3" style={{color:props.mode==="light"?"black":"white"}}>
        <h2 className="mb-4">{props.heading}</h2>
        <div className="container my-3">
          <textarea
            className="form-control"
            style={{backgroundColor:props.mode==="dark"?"grey":"white",color:props.mode==="light"?"black":"white"}}
            id="textform"
            value={text}
            // onInput={countWord}
            // placeholder="Enter Your Text Here..."
            onChange={handleOnChange}
            rows="5"
          ></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>
          Convert to UPPERCASE
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>
          Convert to lowercase
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleClearClick}>
          Clear
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleAltClick}>
          AlTeRnAtE
        </button>
        {/* <button className="btn btn-primary mx-2 my-2" onClick={handleCaptClick}>
          Capitalize
        </button> */}
        <button disabled={text.length===0} className="btn btn-primary mx-2" onClick={handleCopy}>
          Copy Text
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-2" onClick={handleRemoveSpaces}>
          Remove Extra Spaces
        </button>
      </div>

      <div className="container my-3" style={{color:props.mode==="light"?"black":"white"}}>
        <h1>Word Counter...</h1>
        {/* <p>
          <span id="show">0</span> Words and {text.length} Characters
        </p> */}
        <p>
        {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Words and {text.length} Characters
        </p>
        <p>{0.08 * text.split(" ").filter((element)=>{return element.length!==0}).length} Average Minutes to Read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter Text to Preview "}</p>
      </div>
    </>
  );
}