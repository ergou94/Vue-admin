import { login } from '@/api/user'
const state = {
  token: ''
}
const mutations = {
  setToken (state, token) {
    state.token = token
  }
}
const actions = {
  async login (context, data) {
    const res = await login(data)
    context.commit('setToken', res.data.data)
    console.log(res)
  }
}
export default {
  namespaced: true,
  state,
  mutations,
  actions
}

