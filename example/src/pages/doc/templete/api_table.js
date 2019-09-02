import react, { useState } from 'react'
import './index.scss'

export default (apiData, title = 'API', subTitle) => {
    return (
        <div className="doc-templete">
            <h4>
                {title}
                {
                    subTitle ? <h5>{subTitle}</h5> : null
                }</h4>
            <div className="component-content">
                <table>
                    <thead>
                        <tr>
                            <th>属性</th>
                            <th>说明</th>
                            <th>类型</th>
                            <th>可选值</th>
                            <th>默认值</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            apiData.map(item => {
                                return <tr>
                                    {
                                        item.map(item_ => {
                                            return <td>
                                                {item_}
                                            </td>
                                        })
                                    }
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}