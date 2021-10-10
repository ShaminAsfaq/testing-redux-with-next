import React, { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../state';
import styles from '../styles/Home.module.css';

import TitleList from '../components/TitleList';

const redux = () => {
    const foundState = useSelector(state => state);
    const { totalNumber } = foundState;
    const titleRef = useRef('');


    const dispatch = useDispatch();
    const foundActionCreators = bindActionCreators(actionCreators, dispatch);
    const { increment, decrement, insertTitle } = foundActionCreators;
    return (
        <div className={styles.description} style={{display: 'flex', flexDirection: 'column'}}>
            <section className='description'>
                <h1>{totalNumber}</h1>
                <button onClick={() => increment(5)}>Increment</button>
                <button onClick={() => decrement(5)}>Decrement</button>
            </section>
            <section>
                <input type='text' placeholder='Enter a title' ref={titleRef}/>
                <button onClick={() => insertTitle(titleRef.current.value) }>Add</button>
                <TitleList/>
            </section>
        </div>
    )
}

export default redux
