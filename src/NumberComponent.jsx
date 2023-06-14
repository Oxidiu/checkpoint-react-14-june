import React, {useState, useEffect} from 'react'

export const NumberComponent = () => {
    const [fetchedNumber, setFetchedNumber] =useState(null)
    useEffect(() => {
        fetch("https://www.random.org/integers/?num=1&min=1&max=100&col=1&base=10&format=plain&rnd=new")
        .then((response) => response.json())
        .then((number) => setFetchedNumber(number))
        .catch((err) => console.log(err))
    }, [])

    const increment = () => {
        const incrementedNumber = fetchedNumber + 1
        setFetchedNumber(incrementedNumber)
    }
    const saveToLocalStorage = () => {
        localStorage.setItem('storedNumber', JSON.stringify(fetchedNumber))
    }
    const loadFromLocalStorage = () => {
        const storedNumber = localStorage.getItem("storedNumber")
        setFetchedNumber(JSON.parse(storedNumber))
        
    }
    return (
        <div>
            <h2 className={fetchedNumber % 2 === 1 ? "odd": "even"}>{fetchedNumber}</h2>
            <button onClick={() => increment()}>Increment</button>
            <button onClick={saveToLocalStorage}>Save to LocalStorage</button>
            <button onClick={() => {
                loadFromLocalStorage()
            }}>Load from LocalStorage</button>
        </div>
    )
}