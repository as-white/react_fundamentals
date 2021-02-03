import React, {useState} from 'react';

const TenLittleMonkeys = () => {
    const [count, setCount] = useState(10);

    function handleClick () {
        if(count != 0) {
        setCount(count - 1);
        }
    }
    return(
        <div>
            <button onClick={handleClick}>Click!</button>
            <br/>
            <p>{count != 0 ? `${count} little monkeys jumping on the bed. One fell off and bumped his head.` : "No more monkeys jumping on the bed!"}</p>
        </div>
    );
};


export default TenLittleMonkeys;