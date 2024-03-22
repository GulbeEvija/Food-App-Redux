const ChangeQuantity = ({quantity, setQuantity}) => {

    const addQuatity = () => {
        const newQuatity = quantity + 1;
        setQuantity(newQuatity)
    }

    const removeQuatity = () => {
        if (quantity <= 1) return;
        const newQuatity = quantity - 1;
        setQuantity(newQuatity)
    }
    
    return (
        <div>
            <button onClick={addQuatity}>+</button>
            <span>{quantity}</span>
            <button onClick={removeQuatity}>-</button>
        </div>
    )
}

export default ChangeQuantity;