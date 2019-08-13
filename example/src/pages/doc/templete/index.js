import react, { useState } from 'react'
import './index.scss'

export default (ComContent, CodeContent) => {
    let [show, setShow] = useState(false)
    return (
        <div className="doc-templete">
            <div className="component-content">
                <ComContent />
            </div>

            <div className={`code-content ${show ? 'content-show-true' : 'content-show-false'}`}>
                <CodeContent />
            </div>
            <div className="templete-footer" onClick={() => {
                setShow(!show)
            }}>
                {
                    show ? '隐藏代码' : '显示代码'
                }
            </div>
        </div>
    )
}