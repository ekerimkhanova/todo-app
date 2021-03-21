import React, {memo} from "react";

const TextAreaUI = ({text, classes, className = '', ...rest}) => {
  return <textarea className={`${classes['textarea']} ${className}`} {...rest} />
}

export default memo(TextAreaUI);
