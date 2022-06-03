
function Word(props) {
    // const word1 = props.word1;
    // const word2 = props.word2;
    const { word1, word2 } = props;
    return (
        <div>
            <h3>Given words: {word1}, {word2}</h3>
        </div>
    )
}

export default Word;