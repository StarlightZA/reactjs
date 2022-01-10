import React from "react";

function Entry({ name, emoji, meaning }) {
  return (
    <div className="term">
      <span className="emoji" role="img" aria-label="Tense Biceps">
        {emoji}
      </span>
      <dt>
        <span>{name}</span>
      </dt>
      <dd>{meaning}</dd>
    </div>
  );
}
export default Entry;
