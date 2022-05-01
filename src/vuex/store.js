/*
 * @Author: fauchard
 * @Date: 2021-11-13 22:34:14
 * @LastEditTime: 2021-11-13 23:15:12
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \dm\src\vuex\store.js
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    count: 0
}

/**
 * mutations 里面放置的是我们操作state对象属性的方法
 */
 const mutations = {
    mutationsAddCount(state, n = 0) {
        return (state.count += n)
    },
    mutationsReduceCount(state, n = 0) {
        return (state.count -= n)
    }
}



const actions = {
    actionsAddCount(context, n = 0) {
        console.log(context)
        return context.commit('mutationsAddCount', n)
    },
    actionsReduceCount({ commit }, n = 0) {
        return commit('mutationsReduceCount', n)
    }
}
const getters = {
    newCount1(state) {
        return (state.count += 10)
    },
    newCount2(state,getters) {
        return (state.count + getters.newCount1)
    }
}

export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters,

    
})


