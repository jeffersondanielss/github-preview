export const getUser = ({dispatch}, username) => dispatch('GET_USER', username)
export const getRepo = ({dispatch}, username) => dispatch('GET_REPO', username)
export const getOrg = ({dispatch}, username) => dispatch('GET_ORG', username)
export const setUser = ({dispatch}, username) => dispatch('SET_USER', username)
