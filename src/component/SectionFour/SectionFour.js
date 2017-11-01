import React, { Component } from 'react'
import styles from './SectionFour.css'

import Table from '../Table/Table'

const data = [
    {
        city: '广州市',
        a: 1,b:2,c:3,d:4,e:5,f:6,g:7,h:8,i:9,j:10
    },
    {
        city: '深圳市',
        a: 1,b:2,c:3,d:4,e:5,f:6,g:7,h:8,i:9,j:10
    },
    {
        city: '珠海市',
        a: 1,b:2,c:3,d:4,e:5,f:6,g:7,h:8,i:9,j:10
    },
    {
        city: '佛山市',
        a: 1,b:2,c:3,d:4,e:5,f:6,g:7,h:8,i:9,j:10
    },
    {
        city: '江门市',
        a: 1,b:2,c:3,d:4,e:5,f:6,g:7,h:8,i:9,j:10
    },
    {
        city: '湛江市',
        a: 1,b:2,c:3,d:4,e:5,f:6,g:7,h:8,i:9,j:10
    },
    {
        city: '茂名市',
        a: 1,b:2,c:3,d:4,e:5,f:6,g:7,h:8,i:9,j:10
    },
    {
        city: '肇庆市',
        a: 1,b:2,c:3,d:4,e:5,f:6,g:7,h:8,i:9,j:10
    },
    {
        city: '惠州市',
        a: 1,b:2,c:3,d:4,e:5,f:6,g:7,h:8,i:9,j:10
    },
    {
        city: '梅州市',
        a: 1,b:2,c:3,d:4,e:5,f:6,g:7,h:8,i:9,j:10
    },
]

class SectionFour extends Component {
    render() {
        return (
            <div className={styles.container}>
                <Table title='考核指标'
                    category={['检出率','在管率','非在管率','失访率','拒访率','随访率','低保率','社保率','领药率','用药率']}
                    data={data}
                />
                <div className={styles.graph}>graph</div>
            </div>
        )
    }
}

export default SectionFour