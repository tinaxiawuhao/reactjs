import React from 'react'; //第一步，导入React

class HelloWorld extends React.Component { //第二步，编写类并且继承 React.Component
    render(){ //第三步，编写render()方法，用于渲染页面
        return <div>hello world! name={this.props.name}, address={this.props.children}</div> //JSX语法
    }
}

export default HelloWorld; //第四步，导出该类
