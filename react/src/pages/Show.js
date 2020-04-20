import React from 'react'
import HelloWorld from './HelloWorld' //导入HelloWorld组件

class Show extends React.Component {
    render() {
        return <HelloWorld name="zhangsan">shanghai</HelloWorld>; //使用HelloWorld组件
    }
}

export default Show;
