
function RandomNumber() {
    const randomNumber = Math.round(Math.random()*10)
    return (
        <h2>{randomNumber}</h2>
    )
}

export default RandomNumber;