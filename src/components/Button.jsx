import React from "react";

function Button(props) {
  if (props.size === "sm") {
    return (
      <a
        className={`inline-block text-lg lg:text-xl rounded-full hover:bg-kamo-green-alt px-6 ${
          "bg-kamo-" + props.bg
        }
        ${"font-" + props.font}  
        ${"py-" + props.py}  ${"text-kamo-" + props.color}
        ${"mr-" + props.mr}`}
        href={props.link}
      >
        {props.text}
      </a>
    );
  }
}

export default Button;
