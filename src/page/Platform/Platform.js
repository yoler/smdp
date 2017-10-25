import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import * as actions from '../../action/action'
// import classNames from 'classnames/bind'
import styles from './Platform.css'
import Query from '../../component/Query/Query'
import Pagination from '../../component/Pagination/Pagination'

// let cx = classNames.bind(styles)

class Platform extends Component {
    render() {
        const data = [
            {name:'亢禹',gender:'m',level:0,code:'00001',modified: '20171019'},
            {name:'廖树发',gender:'f',level:5,code:'00002',modified: '20171019'},
            {name:'黄柱超',gender:'m',level:3,code:'00003',modified: '20171019'},
            {name:'刘鹏',gender:'m',level:2,code:'00004',modified: '20171019'},
            {name:'张鑫',gender:'m',level:1,code:'00005',modified: '20171019'},
            {name:'戴斯林',gender:'m',level:0,code:'00006',modified: '20171019'},
            {name:'钟俊宇',gender:'m',level:1,code:'00007',modified: '20171019'},
        ]
        // let className = cx({})
        return (
            <div className={styles.container} style={{minHeight: document.documentElement.clientHeight - 172}}>
                <Query />
                {
                    this.props.platformLoading ?
                    <div style={{display:'flex',justifyContent:'center',alignItems:'center',margin:'0 auto',color:'#00a6f3',
                        height: document.documentElement.clientHeight - 462
                    }}>
                        <i className="fa fa-spinner fa-pulse fa-4x fa-fw" aria-hidden="true"></i>
                    </div> :
                    data.map((d,i) =>
                        <div key={i} className={styles.card}>
                            <div className={styles.photo}>
                                <div className={styles.tag}>{`${d.level}级`}</div>
                                照片
                            </div>
                            <div className={styles.text}>{`姓名：${d.name}`}</div>
                            <div className={styles.text}>{`性别：${d.gender === 'm' ? '男' : '女'}`}</div>
                            <div className={styles.text}>{`卫计编号：${d.code}`}</div>
                            <div className={styles.text}>{`修改时间：${d.modified}`}</div>
                        </div>
                    )
                }
                <Pagination total={8} defaultCurrent={1}/>
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

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Platform))