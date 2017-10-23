import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import * as actions from '../../action/action'
import styles from './Overview.css'
import guangdongsheng from './guangdongsheng.json'
import zhuhaishi from './zhuhaishi.json'
import doumenqu from './doumenqu.json'

function getMousePos(event) {
    var e = event || window.event;
    return {'x':e.clientX,'y':e.clientY}
}

class Overview extends Component {
    constructor(props) {
        super(props)
        this.state = {
            current: null,
            showTip: false,
            level: 1,
            showMap: true
        }
    }
    mouseOver(event,i) {
        let pos = getMousePos(event)
        this.setState({current: i,showTip:true,x:pos.x+50,y:pos.y-50})
    }
    mouseOut() {
        this.setState({current: null,showTip:false})
    }
    mouseMove(event) {
        let pos = getMousePos(event)
        this.setState({x:pos.x+50,y:pos.y-50})
    }
    handleClick(city) {
        if(this.state.level === 3) {
            this.setState({showMap: false})
            this.props.clickCity(city)
        }
        if(city === '珠海市') {
            this.setState({current: null,showTip:false,level: 2})
            this.props.clickCity(city)
        } else if(city === '斗门区') {
            this.setState({current: null,showTip:false,level: 3})
            this.props.clickCity(city)
        }
    }
    render() {
        let data = this.props.currentCity === '广东省' ? guangdongsheng : 
            this.props.currentCity === '珠海市' ? zhuhaishi : doumenqu
        return (
            <div style={{minHeight: document.documentElement.clientHeight - 162}} className={styles.container}>
                <div className={styles.survey}>
                    <div className={styles.surveyTitle}>{
                        `${this.props.currentCity}概况`.split('').map((d,i) => <div key={i}>{d}</div>)
                    }</div>
                    <div className={styles.surveyContent}>
                        <div className={styles.surveyRate}>
                            检出率：5‰
                        </div>
                        <div style={{display:'flex'}}>
                            {
                                ['0级','1级','2级','3级','4级','5级'].map((d,i) =>
                                    <div key={i} className={styles.surveyItem}>{`${d}：${i}人`}</div>
                                )
                            }
                        </div>
                        <div style={{display:'flex'}}>
                            {
                                ['总人口','户籍人口','非户籍人口'].map((d,i) =>
                                    <div key={i} className={styles.surveyItem}>{`${d}：${i}人`}</div>
                                )
                            }
                        </div>
                        <div style={{display:'flex'}}>
                            {
                                ['低保','社保','领药','用药','随访'].map((d,i) =>
                                    <div key={i} className={styles.surveyItem}>{`${d}：${i}人`}</div>
                                )
                            }
                        </div>
                        <div style={{display:'flex'}}>
                            {
                                ['在管','非在管','拒访','失访'].map((d,i) =>
                                    <div key={i} className={styles.surveyItem}>{`${d}：${i}人`}</div>
                                )
                            }
                        </div>
                    </div>
                </div>
                {
                    this.state.showMap ? 
                <div className={styles.svgContainer} style={{
                    width: this.props.currentCity === '广东省' ? 1106.79 : this.props.currentCity === '珠海市' ? 910.95 : 748.99,
                    height: this.props.currentCity === '广东省' ? 791.07 : this.props.currentCity === '珠海市' ? 808.39 : 811
                }}>
                    {
                        this.state.showTip ?
                        <div className={styles.tips} style={{left:this.state.x,top:this.state.y}}>
                            <div style={{fontSize:18,margin:'5px 0 5px 5px'}}>
                                {this.state.current !== null ? data[this.state.current].name : null}
                            </div>
                            <div className={styles.line}></div>
                            <div className={styles.tip}>
                                <i className="fa fa-genderless" aria-hidden="true" style={{fontSize:12,margin:'0 5px'}}></i>
                                检出率：0.03‰
                            </div>
                            <div className={styles.tip}>
                                <i className="fa fa-genderless" aria-hidden="true" style={{fontSize:12,margin:'0 5px'}}></i>
                                三级及以上：1000人
                            </div>
                            <div className={styles.tip}>
                                <i className="fa fa-genderless" aria-hidden="true" style={{fontSize:12,margin:'0 5px'}}></i>
                                随访：800人
                            </div>
                            <div className={styles.tip}>
                                <i className="fa fa-genderless" aria-hidden="true" style={{fontSize:12,margin:'0 5px'}}></i>
                                拒访：92人
                            </div>
                            <div className={styles.tip}>
                                <i className="fa fa-genderless" aria-hidden="true" style={{fontSize:12,margin:'0 5px'}}></i>
                                失访：10人
                            </div>
                        </div> : null
                    }
                    <svg className={styles.svg} style={{
                        width: this.props.currentCity === '广东省' ? 1106.79 : this.props.currentCity === '珠海市' ? 910.95 : 748.99,
                        height: this.props.currentCity === '广东省' ? 791.07 : this.props.currentCity === '珠海市' ? 808.39 : 811 
                    }}>
                        {
                            data.map((d,i) => {
                                return <g key={i} style={{cursor: 'pointer'}}
                                    onMouseOver={(e) => this.mouseOver(e,i)}
                                    onMouseOut={() => this.mouseOut()}
                                    onMouseMove={(e) => this.mouseMove(e)}
                                    onClick={() => this.handleClick(d.name)}   
                                >
                                    {d.polyline.map((v,j) =>
                                    <path key={j} d={v} stroke="#51ddd3" strokeWidth="2" transform={d.transform}
                                        fill={this.state.current === i ? '#51ddd3' : 'white'}
                                    />)}
                                    <text key={i} x={d.center.x} y={d.center.y} style={{cursor: 'pointer'}}
                                        fill={this.state.current === i ? 'white' : '#777'}
                                    >{d.name}</text>
                                </g>
                            })
                        }
                    </svg>
                </div>
                : null
                }
                <div className={styles.tableContainer}>图表板块一</div>
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
    return {...state}
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions,dispatch)
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Overview))