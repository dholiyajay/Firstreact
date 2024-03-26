import React from 'react';
import { decreament, increamnet } from '../../../redux/Action/Counter.Action';
import { useDispatch } from 'react-redux';

function Counter(props) {

    const dispatch = useDispatch();
    const hendalinc = () => {
        dispatch(increamnet())
    }

    const hendalDec = () => {
        dispatch(decreament())
    }
    return (
        <div>
            <button  onClick={hendalinc}>+</button>
            {0}
            <button onClick={hendalDec}>-</button>



        </div>
    );
}

export default Counter;