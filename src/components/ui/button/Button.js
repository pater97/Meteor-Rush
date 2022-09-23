import './button.css';

function Button(props){

    function press(){
        if(!!props.callback)
            props.callback();
    }

    return(
        <div className='button-container' onClick={press}>
            {props.label}
        </div>
    )

}

export default Button