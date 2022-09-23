import PropTypes from "prop-types"

import './button.css'

function Button(props) {

  function press(e) {
    if (!!props.callBack) {
      props.callBack(e)
    }
  }

  return (
    <div className='button-container' onClick={press}>
        {props.label}
    </div>
  )
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  callBack: PropTypes.func
}

export default Button