import React, { Component } from 'react'
import styles from './Query.css'

class Query extends Component {
    render() {
        return (
            <div className={styles.container}>
                <div className={styles.breadContainer}>
                    <div className={styles.bread}>面包屑导航</div>
                </div>
                <div className={styles.queryContainer}>
                    <div className={styles.content}>
                        <div className={styles.title}>危险等级</div>
                        <div className={styles.query}>
                            <div className={styles.item}>3级以上</div>
                            <div className={styles.item}>0级</div>
                            <div className={styles.item}>1级</div>
                            <div className={styles.item}>2级</div>
                            <div className={styles.item}>3级</div>
                            <div className={styles.item}>4级</div>
                            <div className={styles.item}>5级</div>
                        </div>
                    </div>
                    <div className={styles.content}>
                        <div className={styles.title}>现实状况</div>
                        <div className={styles.query}>
                            <div className={styles.item}>在家居住</div>
                            <div className={styles.item}>住院治疗</div>
                            <div className={styles.item}>羁押服刑</div>
                            <div className={styles.item}>下落不明</div>
                            <div className={styles.item}>就学</div>
                            <div className={styles.item}>就业</div>
                        </div>
                    </div>
                    <div className={styles.content}>
                        <div className={styles.title}>所属库</div>
                        <div className={styles.query}>
                            <div className={styles.item}>在管</div>
                            <div className={styles.item}>非在管</div>
                            <div className={styles.item}>失访</div>
                            <div className={styles.item}>拒访</div>
                            <div className={styles.item}>死亡</div>
                        </div>
                    </div>
                    <div className={styles.content}>
                        <div className={styles.title}>人口状况</div>
                        <div className={styles.query}>
                            <div className={styles.item}>户籍人口</div>
                            <div className={styles.item}>非户籍人口</div>
                            <div className={styles.item}>流动人口</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Query