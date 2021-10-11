import React from 'react'
import { useSelector } from 'react-redux'
import styles from '../styles/Home.module.css';
import titleListStyles from '../styles/TitleList.module.css';

const TitleList = () => {
    const { titleList } = useSelector(state => state);

    return (
        <>
        {titleList?.length !==0 && <div className={titleListStyles.box}>
            <h2>Item List</h2>
            <ul>
                {titleList.map((each, index) => <li key={index}>
                                                    <span>{index+1}</span>
                                                    {each}
                                                </li>)}
            </ul>
        </div>}
        {titleList?.length === 0 && <div style={{marginTop: '20px'}}>No Item</div>}
        </>
    )
}

export default TitleList
