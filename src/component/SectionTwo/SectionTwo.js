import React, { Component } from 'react'
import styles from './SectionTwo.css'

import Table from '../Table/Table'

const data = [
    {
        city: '广州市',
        category: {
            a: 1,b:2,c:3,d:4
        }
    },
    {
        city: '深圳市',
        category: {
            a: 1,b:2,c:3,d:4
        }
    },
    {
        city: '珠海市',
        category: {
            a: 1,b:2,c:3,d:4
        }
    },
    {
        city: '佛山市',
        category: {
            a: 1,b:2,c:3,d:4
        }
    },
    {
        city: '江门市',
        category: {
            a: 1,b:2,c:3,d:4
        }
    },
    {
        city: '湛江市',
        category: {
            a: 1,b:2,c:3,d:4
        }
    },
    {
        city: '茂名市',
        category: {
            a: 1,b:2,c:3,d:4
        }
    },
    {
        city: '肇庆市',
        category: {
            a: 1,b:2,c:3,d:4
        }
    },
    {
        city: '惠州市',
        category: {
            a: 1,b:2,c:3,d:4
        }
    },
    {
        city: '梅州市',
        category: {
            a: 1,b:2,c:3,d:4
        }
    },
]

class SectionTwo extends Component {
    render() {
        return (
            <div className={styles.container}>
                <Table title='人口状况'
                    category={['总人口','户籍人口','非户籍人口','流动人口']}
                    data={data}
                />
                <div className={styles.graph}>graph</div>
            </div>
        )
    }
}

export default SectionTwo