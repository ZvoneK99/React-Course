function FunctionEvent() {
    function handeClick() {
        console.log('Button is clicked');
    }
    return(
        <div>
            Functional Component 
            <button onClick={handeClick}>Click here</button>
        </div>
    )
}

export default FunctionEvent;