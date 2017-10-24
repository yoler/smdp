import React, { Component } from 'react'
import styles from './Map.css'
import MapTip from '../MapTip/MapTip'

function getMousePos(event) {
    var e = event || window.event;
    return {'x':e.clientX,'y':e.clientY}
}

class Map extends Component {
    constructor(props) {
        super(props)
        this.state = {
            current: null,
            showTip: false
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
        if(document.documentElement.clientWidth - pos.x < 230) {
            this.setState({x:pos.x-230,y:pos.y-85})
        } else {
            this.setState({x:pos.x+50,y:pos.y-85})
        }
    }
    handleClick(city,level) {
        if(city === '珠海市' || city === '斗门区' || level === 'town') {
            this.setState({current: null, showTip: false})
            this.props.click(city,level)
        }
    }
    render() {
        return (
            <div className={styles.container} style={{width: this.props.width,height: this.props.height}}>
                {
                    this.state.showTip ?
                    <MapTip x={this.state.x} y={this.state.y} title={this.props.data[this.state.current].name}/>
                    : null
                }
                <svg className={styles.svg} style={{width: this.props.width,height: this.props.height}}>
                    {
                        this.props.data.map((d,i) => {
                            return <g key={i} style={{cursor: 'pointer'}}
                                onMouseOver={(e) => this.mouseOver(e,i)}
                                onMouseOut={() => this.mouseOut()}
                                onMouseMove={(e) => this.mouseMove(e)}
                                onClick={() => this.handleClick(d.name,d.level)}
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
        )
    }
}

export default Map