import React from 'react'
import { useSelector } from 'react-redux'
import styles from '../styles/Home.module.css';

const TitleList = () => {
    const foundState = useSelector(state => state);

    const { titleList } = useSelector(state => state);


    return (
        <div>
            {titleList && titleList.map((each, index) => {
                return <li key={index}>{each}</li>
            })}
        </div>
    )
}

export default TitleList
