import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex)
const store  =new Vuex.Store({
    state:{
        count:0
    },
    getters:{
    },
    mutations:{
            
    },
    actions:{
    },
    
     //数据持久保存
    // plugins:[createPersistedState({
    //     key:"1906", //本地缓存的key名称
    //     storage:window.sessionStorage,//缓存形式
    //     reducer(state){  //只缓存state中的list
    //         return {
    //             list:state.list
    //         }
    //     }
    // })]
})
export default store;