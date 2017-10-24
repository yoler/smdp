import React, { Component } from 'react'
// import classNames from 'classnames/bind'
import { Route } from 'react-router-dom'
import styles from './App.css'
import Header from '../../component/Header/Header'
import Overview from '../Overview/Overview'
import Platform from '../Platform/Platform'
import Footer from '../../component/Footer/Footer'

// let cx = classNames.bind(styles)

class App extends Component {
    render() {
        // let className = cx({})
        return (
            <div className={styles.app}>
                <Header />
                <Route exact path="/" component={Overview}/>
                <Route path="/platform" component={Platform}/>
                <Footer />
            </div>
        )
    }
}

export default App