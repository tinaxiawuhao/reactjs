import request from '../util/request';

export default {
    namespace: 'list',
    state: {
        data: [],
        maxNum: 0
    },
    reducers : {
        addNewData(state, result) { //result就是拿到的结果数据
            if(result.data){ //判断result中的data是否存在，如果存在，说明是初始化数据，直接返回
                return result.data;
            }

            let maxNum = state.maxNum + 1;
            let list = [...state.data, maxNum];
            return { //更新状态值
                data: list,
                maxNum: maxNum
            }
        }
    },
    // 增加effects配置用于进行异步数据请求
    effects: {
        *initData(params, sagaEffects) { //定义异步方法---->generator函数
            const {call, put} = sagaEffects; // 需要传入sagaEffects以获取到call、put方法
            const url = "/ds/list"; // 定义请求的url
            let data = yield call(request, url); //执行请求，call方法需要request作为参数
            yield put({ // 调用reducers中的方法并且传入对象作为参数，对象中有type和data两个属性
                type : "addNewData", //指定调用方法名
                data : data //ajax请求传递回来的数据
            });
        }
    }
}
