import React, {useState} from 'react';

import './App.css';
import {Button} from "./Button/Button";

function App() {
    let startValue = 0
    let endValue = 5
    let [num, setNum] = useState<number>(startValue)
    const increment = () => setNum(num + 1)
    const reset = () => setNum(startValue)
    const decrement = () => setNum(num - 1)

    const whenIncDisabled = num === endValue
    const whenResetDisabled = num === startValue
    const whenRemoveDisabled = num === startValue || num > endValue
    const classNameForNum = `numWrapper ${num === endValue ? 'error' : null}`
    return (
        <div className="App buttonsWrapper">
            <div>
                <div className={classNameForNum}>{num}</div>
                <Button className='button button1'
                        name={'Add'}
                        callback={increment}
                        disabled={whenIncDisabled}
                />
                <Button className='button button2'
                        name={'Reset'}
                        callback={reset}
                        disabled={whenResetDisabled}
                />
                <Button className='button button3'
                        name={'Remove'}
                        callback={decrement}
                        disabled={whenRemoveDisabled}
                />
            </div>
        </div>
    );
}

export default App;
