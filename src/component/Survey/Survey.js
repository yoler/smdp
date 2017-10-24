import React, { Component } from 'react'
import styles from './Survey.css'

class Survey extends Component {
    render() {
        return (
            <div className={styles.container}>
                <div className={styles.title}>{
                    `${this.props.city}概况`.split('').map((d,i) => <div key={i}>{d}</div>)
                }</div>
                <div className={styles.content}>
                    <div className={styles.rate}>
                        检出率：5‰
                    </div>
                    <div style={{display:'flex'}}>
                        {
                            ['0级','1级','2级','3级','4级','5级'].map((d,i) =>
                                <div key={i} className={styles.item}>{`${d}：${i}人`}</div>
                            )
                        }
                    </div>
                    <div style={{display:'flex'}}>
                        {
                            ['总人口','户籍人口','非户籍人口'].map((d,i) =>
                                <div key={i} className={styles.item}>{`${d}：${i}人`}</div>
                            )
                        }
                    </div>
                    <div style={{display:'flex'}}>
                        {
                            ['低保','社保','领药','用药','随访'].map((d,i) =>
                                <div key={i} className={styles.item}>{`${d}：${i}人`}</div>
                            )
                        }
                    </div>
                    <div style={{display:'flex'}}>
                        {
                            ['在管','非在管','拒访','失访'].map((d,i) =>
                                <div key={i} className={styles.item}>{`${d}：${i}人`}</div>
                            )
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default Survey