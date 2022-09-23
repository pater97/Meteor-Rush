import PropTypes from "prop-types"
import InputError from "../inputError/InputError"
import './input.css';


function InputBox(props) {

  function change(e) {
    if (!!props.callBack) {
      props.callBack(e)
    }
  }

  return (
    <div className="input-container">
      <input
        id={props.id}
        type={props.type}
        placeholder={props.placeholder}
        className={"input-box"}
        onChange={change}
      />
      {props.isError && <InputError msg={props.msg} />}
    </div>
  )
}

InputBox.propTypes = {
    type: PropTypes.string,
    cssClass: PropTypes.string,
    placeholder: PropTypes.string.isRequired,
    callBack: PropTypes.func,
    objCss: PropTypes.object,
}

InputBox.defaultProps = {
    type: "text"
  }  

export default InputBox