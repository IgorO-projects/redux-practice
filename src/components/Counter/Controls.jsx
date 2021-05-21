const Controls = ({ step, onIncrement, onDecrement }) => {
    return (
        <div className="Counter__controls">
            <button type="button" onClick={onIncrement}>increment {step}</button>
            <button type="button" onClick={onDecrement}>dicrement {step}</button>
        </div>
    )
}

export default Controls;