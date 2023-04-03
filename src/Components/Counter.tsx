import { useState } from 'react';
import Text from './Text';
import Button from './Button';
import './Counter.css';

const Counter = ({ initialValue = 0 }) => {

    let [count, setCount] = useState<number>(initialValue);

    return (
        <>
            <Text
                value={"Counter App"}
                style={{ fontSize: "30px", fontWeight: "bold" }}
            />

            <Text
                value={`Value Of Counter Is: ${count}`}
                style={{ fontSize: "20px" }}
            />

            <Button
                value={'Increment'}
                className='btn-inc'
                onClick={() => setCount(count + 1)}
            />

            <Button
                value={'Decrement'}
                className='btn-dec'
                onClick={() => setCount(count - 1)}
            />
        </>
    )
};

export default Counter;