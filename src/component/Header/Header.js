import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Header.css'

class Header extends Component {
    render() {
        return (
            <header className={styles.header}>
                <section className={styles.title}>
                    <div className={styles.logo}></div>
                    <div className={styles.text}>精患管理平台</div>
                </section>
                <nav className={styles.nav}>
                    <NavLink exact to='/' className={styles.navChild} activeClassName={styles.selected}>
                        <div className={styles.navTag}>
                            <i className="fa fa-globe" aria-hidden="true"></i>
                        </div>
                        <div>全景图</div>
                    </NavLink>
                    <NavLink to='/platform' className={styles.navChild} activeClassName={styles.selected}>
                        <div className={styles.navTag}>
                            <i className="fa fa-address-card-o" aria-hidden="true"></i>
                        </div>
                        <div>患者平台</div>                        
                    </NavLink>
                    <NavLink to='/two' className={styles.navChild} activeClassName={styles.selected}>
                        <div className={styles.navTag}>
                            <i className="fa fa-briefcase" aria-hidden="true"></i>
                        </div>
                        <div>在线办公</div>                        
                    </NavLink>
                    <NavLink to='/three' className={styles.navChild} activeClassName={styles.selected}>
                        <div className={styles.navTag}>
                            <i className="fa fa-cogs" aria-hidden="true"></i>
                        </div>
                        <div>内容管理</div>                        
                    </NavLink>
                    <NavLink to='/four' className={styles.navChild} activeClassName={styles.selected}>
                        <div className={styles.navTag}>
                            <i className="fa fa-code" aria-hidden="true"></i>
                        </div>
                        <div>代码生成</div>
                    </NavLink>
                </nav>
            </header>
        );
    }
}

export default Header