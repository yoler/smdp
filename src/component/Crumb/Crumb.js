import React, { Component } from 'react'
import styles from './Crumb.css'

class Crumb extends Component {
    render() {
        return (
            <div className={styles.container}>
                <div className={styles.bread}>
                    {
                        Array(this.props.data.length * 2 - 1).fill('').map((v,i) =>
                            <div key={i} className={i % 2 === 0 ? styles.item : styles.division}>
                                {i % 2 === 0 ? this.props.data[i / 2] : '>'}
                            </div>
                        )
                    }
                </div>
            </div>
        )
    }
}

export default Crumb