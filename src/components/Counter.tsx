import React from 'react';
import classNames from './Counter.module.scss';
export const Counter = () => {
    const [count, setCount] = React.useState(0);
    const increment = () => setCount(count + 1);

    return (
        <div className={classNames.g}>
            <h1>Count: {count} </h1>
            <button onClick={increment}>Increment</button>
        </div>
    );
};
