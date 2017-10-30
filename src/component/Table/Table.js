import React, { Component } from 'react'
import styles from './Table.css'

class Table extends Component {
    render() {
        return (
            <div className={styles.container}>
                <div className={styles.header}>
                    <div className={styles.title}>{this.props.title}</div>
                    {
                        this.props.category.map((v,i) =>
                            <div key={i} className={styles.category}>{v}</div>
                        )
                    }
                </div>
                <div className={styles.content}>
                    {
                        this.props.data.map((v,i) =>
                            <div className={styles.items}>
                                <div className={styles.city}>{v.city}</div>
                                <div className={styles.item}>{v.a}</div>
                                <div className={styles.item}>{v.b}</div>
                                <div className={styles.item}>{v.c}</div>
                                <div className={styles.item}>{v.d}</div>
                                <div className={styles.item}>{v.e}</div>
                                <div className={styles.item}>{v.f}</div>
                                <div className={styles.item}>{v.g}</div>
                                <div className={styles.item}>{v.h}</div>
                                <div className={styles.item}>{v.i}</div>
                                <div className={styles.item}>{v.j}</div>
                            </div>
                        )
                    }
                </div>
                <div className={styles.arrow}>
                    <div className={styles.left}>
                        <i className="fa fa-angle-left" aria-hidden="true"></i>
                    </div>
                    <div className={styles.right}>
                        <i className="fa fa-angle-right" aria-hidden="true"></i>
                    </div>
                </div>
            </div>
        )
    }
}

export default Table