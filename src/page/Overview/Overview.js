import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import * as actions from '../../action/action'
import styles from './Overview.css'
import guangdongsheng from './guangdongsheng.json'
import zhuhaishi from './zhuhaishi.json'
import doumenqu from './doumenqu.json'

import Survey from '../../component/Survey/Survey'
import Map from '../../component/Map/Map'
import Crumb from '../../component/Crumb/Crumb'
import SectionOne from '../../component/SectionOne/SectionOne'

class Overview extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showMap: true
        }
    }
    componentDidMount() {
        console.log('获取地图数据')
    }
    handleClick = (city,level) => {
        console.log(level)
        if(level === 'town') {
            this.setState({showMap: false})
        }
        this.props.clickCity(city)
    }
    render() {
        let data = this.props.currentCity === '广东省' ? guangdongsheng :
            this.props.currentCity === '珠海市' ? zhuhaishi : doumenqu
        return (
            <div style={{minHeight: document.documentElement.clientHeight - 162}} className={styles.container}>
                <Crumb data={['广东省','珠海市','斗门区','斗门镇']}/>
                <Survey city={this.props.currentCity}/>
                {
                    this.state.showMap ? 
                    <Map data={data} click={this.handleClick}
                        width={this.props.currentCity === '广东省' ? 1106.79 : this.props.currentCity === '珠海市' ? 910.95 : 748.99}
                        height={this.props.currentCity === '广东省' ? 791.07 : this.props.currentCity === '珠海市' ? 808.39 : 811}
                    />
                    : null
                }
                <SectionOne />
                <div className={styles.tableContainer}>图表板块二</div>
                <div className={styles.tableContainer}>图表板块三</div>
                <div className={styles.tableContainer}>图表板块四</div>
                <div className={styles.tableContainer}>图表板块五</div>
                <div className={styles.tableContainer}>图表板块六</div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    console.log(state)
    return {...state}
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions,dispatch)
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Overview))