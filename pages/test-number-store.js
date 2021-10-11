import React, { useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../state';
import styles from '../styles/Home.module.css';
import itemInputStyles from '../styles/ItemInput.module.css';

import TitleList from '../components/TitleList';

const redux = () => {
    const foundState = useSelector(state => state);
    const { totalNumber } = foundState;
    const [inputTitleValue, setInputTitleValue] = useState('');
    const [hasError, setHasError] = useState(false);

    const onChange = (e) => {
        setInputTitleValue(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();

        if (inputTitleValue.trim().length !== 0) {
            setHasError(false);
            if (e.key === 'Enter' || e.keyCode === 13 || e.type === 'click') {
                insertTitle(inputTitleValue);
                setInputTitleValue('');
            }
        } else {
            setHasError(true);
        }
    }

    const dispatch = useDispatch();
    const foundActionCreators = bindActionCreators(actionCreators, dispatch);
    const { increment, decrement, insertTitle } = foundActionCreators;
    return (
        <div className={styles.description} style={{display: 'flex', flexDirection: 'column'}}>
            <section className={styles.description}>
                <h1>{totalNumber}</h1>
                <button className={itemInputStyles.button} onClick={() => increment(5)}>Increment</button>
                <button className={itemInputStyles.button} style={{backgroundColor: 'red'}} onClick={() => decrement(5)}>Decrement</button>
            </section>
            <hr style={{borderTop: '3px dashed #bbb', width: '100%'}}/>
            <section>
                <input className={itemInputStyles.input} type='text' placeholder='Enter a title' value={inputTitleValue} onChange={onChange} onKeyUp={onSubmit}/>
                <button className={itemInputStyles.button} onClick={onSubmit }>Add</button>
                {hasError && <p style={{color: 'red', fontSize: '15px'}}>
                    You must enter something
                </p>}
                <TitleList/>
            </section>
        </div>
    )
}

export default redux
