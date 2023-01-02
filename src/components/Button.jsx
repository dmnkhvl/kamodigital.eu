import React from "react";

function Button(props) {
  if (props.size === "sm") {
    return (
      <a
        className={`inline-block text-lg lg:text-xl rounded-full capitalize hover:bg-kamo-green-alt px-6 bg-gradient-to-r from-kamo-button to-kamo-button-alt
        ${"font-" + props.font}  
        ${"py-" + props.py}  ${"text-kamo-" + props.color}
        ${"mr-" + props.mr}
        ${props.special}`}
        href={props.link}
      >
        {props.text}
      </a>
    );
  } else if (props.size === "md") {
  }
}

export default Button;
