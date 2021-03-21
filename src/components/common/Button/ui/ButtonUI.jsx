import React, {memo} from "react";

const ButtonUI = ({text, classes, className = '', ...rest}) => {
  return <button className={`${classes['button']} ${className}`} {...rest}>
    {text}
  </button>
}

export default memo(ButtonUI);
