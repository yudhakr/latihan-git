import { useState, useEffect } from "react"

const Counter = ({start = 0}) => {
    const [count, setCounter] = useState(start)
    const [warna, setwarna] = useState("red")

    useEffect(() => {
        if (count > 5) {
            setwarna("Blue")
        }
    }, [count])

    return(
        <>
        <h1 style={{color: warna}}>Count: {count}</h1>
        <button onClick={() => setCounter(count + 1)}>Tambah</button>
        <button onClick={() => setCounter(count - 1)}>Kurang</button>
        <button onClick={() => setCounter(0)}>Reset</button>
        </>
    )
}

export default Counter