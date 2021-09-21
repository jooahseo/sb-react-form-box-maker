
const Box = ({ id, width, height, backgroundColor, removeBox }) => {
    const basicStyle={float:"left", display:"inline", margin:"10px"}
    const remove = (e) => {
        removeBox(id);
        e.target.remove()
    }
    return (
        <div style={basicStyle}>
            <div
                data-testid="box" 
                style={{
                width: `${width}px`,
                height: `${height}px`,
                backgroundColor
            }}></div>
            <button onClick={remove}>X</button>

        </div>
    )
}

export default Box;