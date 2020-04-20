import React from 'react'
import { connect } from 'dva';

const namespace = 'list';

const mapStateToProps = (a) => {
    const listData = a[namespace].data;
    const maxNum = a[namespace].maxNum;
    return {
        listData, maxNum
    };
};

const mapDispatchToProps = (dispatch) => { // 定义方法，dispatch是内置函数
    return { //返回的这个对象将绑定到this.props对象中
        addData : () =>{ // 定义方法
            dispatch({ // 通过调用dispatch()方法，调用model中reducers的方法
                type: namespace + "/addNewData" // 指定方法，格式：namespace/方法名
        });
        },
        initDatas : () => { //新增初始化方法的定义
            dispatch({
                type: namespace + "/initData"
            });
        }
    }
}


@connect(mapStateToProps, mapDispatchToProps) //mapDispatchToProps：函数，将方法映射到props中
class List extends React.Component{

    componentDidMount(){
        this.props.initDatas(); //组件加载完后进行初始化操作
    }

    render(){
        return (
            <div>
                <ul>
                    {
                        // 遍历值
                        this.props.listData.map((value,index) => {
                            return <li key={index}>{value}</li>
                        })
                    }
                </ul>
                <button
                    onClick={()=>{this.props.addData()}}>
                    添加
                </button>
            </div>
        );

    }
}

export default List

