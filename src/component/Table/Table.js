import React, { Component } from 'react'
import styles from './Table.css'

class Table extends Component {
    constructor(props) {
        super(props)
        this.state = {
            leftEnable: false,
            rightEnable: true,
            totalPage: Math.ceil(this.props.data.length / 10)
        }
    }
    componentDidMount() {
        console.log(this.state.totalPage)
    }
    leftSilp() {
        if(this.state.leftEnable) {
            console.log('left slip')
        } else {
            return
        }
    }
    rightSilp() {
        console.log('right slip')
    }
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
                            <div key={i} className={styles.items}>
                                <div className={styles.city}>{v.city}</div>
                                {
                                    Object.keys(v.category).map((d,j) =>
                                        <div key={j} className={styles.item}>{v.category[d]}</div>
                                    )
                                }
                            </div>
                        )
                    }
                </div>
                <div className={styles.arrow}>
                    <div className={this.state.leftEnable ? styles.left : styles.disabled} onClick={() => this.leftSilp()}>
                        <i className="fa fa-angle-left" aria-hidden="true"></i>
                    </div>
                    <div className={this.state.rightEnable ? styles.right : styles.disabled} onClick={() => this.rightSilp()}>
                        <i className="fa fa-angle-right" aria-hidden="true"></i>
                    </div>
                </div>
            </div>
        )
    }
}

export default Table