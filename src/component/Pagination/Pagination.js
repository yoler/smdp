import React, { Component } from 'react'
import styles from './Pagination.css'

class Pagination extends Component {
    constructor(props) {
        super(props)
        this.state = {
            current: this.props.defaultCurrent,
            start: 1,
            end: this.props.total > 5 ? 5 : this.props.total,
            previousEnale: false,
            showFirst: false,
            showLeftDot: false,
            showRightDot: this.props.total >= 8 ? true : false,
            showLast: this.props.total >= 8 ? true : false,
            nextEnable: true
        }
    }
    forword() {

    }
    back() {

    }
    next = () => {
        if(this.state.current === this.props.total - 1) {
            this.setState({
                nextEnable: false,
                current: this.props.total
            })
        } else {
            this.setState({
                current: this.state.current + 1,
                previousEnable: true
            })
        }
        if(this.state.current === 4) {
            this.setState({showLeftDot: true})
        }
        if(this.state.current === 3) {
            this.setState({showFirst: true})
        }
    }
    previous = () => {
        if(this.state.current === 2) {
            this.setState({
                previousEnable: false,
                current: 1
            })
        } else {
            this.setState({
                current: this.state.current - 1,
                nextEnable: true
            })
        }

    }
    blank = () => {}
    render() {
        return (
            <div className={styles.container}>
                <div className={styles.item} onClick={this.state.previousEnable ? this.previous : this.blank}>{'＜'}</div>
                {this.state.showFirst ? <div className={styles.item}>1</div> : null}
                {
                    this.state.showLeftDot ? <div className={styles.item}>•••</div> : null
                }
                {
                    [0,1,2,3,4].map((v,i) =>
                        <div key={i} className={this.state.current === v + this.state.start ? styles.itemChecked : styles.item}>
                            {this.state.current >= 3 ? v + this.state.current - 2 : v + 1}
                        </div>
                    )
                }
                {this.state.showRightDot ? <div className={styles.item}>•••</div> : null}
                {this.state.showLast ? <div className={styles.item}>{this.props.total}</div> : null}
                <div className={styles.item} onClick={this.state.nextEnable ? this.next : this.blank}>{'＞'}</div>
            </div>
        )
    }
}

export default Pagination