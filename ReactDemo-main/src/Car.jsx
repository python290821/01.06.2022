
function Car(props) {
    const { model, year, color } = props;
    return (
        <div>
            <span>{model} </span>
            <span>{year} </span>
            <span>{color} </span>
        </div>
    )
}

export default Car;