import React, {useState, Fragment} from 'react';
import './index.scss';

export default apiData => {
    return (
        <div className="doc-templete">
            <h4>API</h4>
            {apiData.map(child => {
                return (
                    <Fragment>
                        {child.title && <h5>{child.title}</h5>}
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
                                    {child.list.map(item => {
                                        return (
                                            <tr>
                                                {item.map(item_ => {
                                                    return <td>{item_}</td>;
                                                })}
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </Fragment>
                );
            })}
        </div>
    );
};
