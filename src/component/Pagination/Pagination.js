import React, { Component } from 'react'
import styles from './Pagination.css'

class Pagination extends Component {
    constructor(props) {
        super(props)
        this.state = {
            current: this.props.dafaultCurrent
        }
    }
    render() {
        return (
            <div className={styles.container}>
                <div className={styles.item}>{'<'}</div>
                {
                    Array(this.props.total > 5 ? 5 : this.props.total).fill('').map((v,i) =>
                        <div key={i} className={styles.item}>{i + 1}</div>
                    )
                }
                {this.props.total > 5 ? <div className={styles.item}>•••</div> : null}
                {this.props.total > 5 ? <div className={styles.item}>{this.props.total}</div> : null}
                <div className={styles.item}>{'>'}</div>
            </div>
        )
    }
}

export default Pagination