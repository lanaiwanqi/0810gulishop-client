import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

// state：管理状态
const state = {
  num: 0
};

// Actions：由于直接在mutation方法中进行异步操作，将会引起数据失效。所以提供了Actions来专门进行异步操作，最终提交mutation方法。
const actions = {
  Increment(context, value){
    context.commit('INCREMENT',value);
  },
  Decrement(context, value){
    context.commit('DECREMENT',value);
  },
  IncrementOdd(context, value){
      if (context.state.num % 2) {
        context.commit('INCREMENT',value);
      }
  },
  IncrementWait(context, value){
    setTimeout(() => {
      context.commit('INCREMENT',value);
    }, 500);
  }
}

// mutations：是操作state数据的方法的集合，比如对该数据的修改、增加、删除等等。
const mutations = {
  INCREMENT(state, value){
    state.num += value;
  },
  DECREMENT(state, value){
    state.num -= value;
  }
}

// getters
// const getters = {
//   bigSum(state){
//     return state.num *100
//   }
// }

export default new Vuex.Store({
  state,
  actions,
  mutations,
  // getters
});