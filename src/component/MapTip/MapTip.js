import React from 'react'
import styles from './MapTip.css'

const MapTip = ({x, y, title}) =>
    <div className={styles.container} style={{left:x,top:y}}>
        <div style={{fontSize:18,margin:'5px 0 5px 5px'}}>{title}</div>
        <div className={styles.line}></div>
        <div className={styles.tip}>
            <i className="fa fa-genderless" aria-hidden="true" style={{fontSize:12,margin:'0 5px'}}></i>
            检出率：0.03‰
        </div>
        <div className={styles.tip}>
            <i className="fa fa-genderless" aria-hidden="true" style={{fontSize:12,margin:'0 5px'}}></i>
            三级及以上：1000人
        </div>
        <div className={styles.tip}>
            <i className="fa fa-genderless" aria-hidden="true" style={{fontSize:12,margin:'0 5px'}}></i>
            随访：800人
        </div>
        <div className={styles.tip}>
            <i className="fa fa-genderless" aria-hidden="true" style={{fontSize:12,margin:'0 5px'}}></i>
            拒访：92人
        </div>
        <div className={styles.tip}>
            <i className="fa fa-genderless" aria-hidden="true" style={{fontSize:12,margin:'0 5px'}}></i>
            失访：10人
        </div>
    </div>

export default MapTip