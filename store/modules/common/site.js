export const state = () => ({
    data: null,
    editDialogOpen: false,
    pathToEdit: null,
    editorType: null,
    isLoading: true
})

export const getters = {
    GET_DATA_BY_PATH(state) {
        return (path) => {
            const data = state.data

            if (!data) {
                return '...'
            }

            let result = Object.assign({}, data)

            const pathItems = path.split('.')

            pathItems.forEach(key => {
                if (key.includes('-')) {
                    const [key_, index] = key.split('-')
                    result = result[key_][index]
                } else {
                    result = result[key]
                }
            })

            return result
        }
    }
}

export const mutations = {
    OPEN_EDITOR(state, data) {
        state.pathToEdit = data.path
        state.editorType = data.editorType
        state.editDialogOpen = true
    },

    CLOSE_EDITOR(state) {
        state.pathToEdit = null
        state.editorType = null
        state.editDialogOpen = false
    },

    SET_DATA(state, data) {
        state.data = data
    },

    SET_LOADING(state, val) {
        state.isLoading = val
    },

    CHANGE_DATA(state, val) {
        function update(data, path, value) {
            const pathItems = path.split('.')
            const last = pathItems.pop()
            let currentData = data

            pathItems.forEach(item => {

                let index = null
                let key = item

                if (item.includes('-')) {
                    [key, index] = item.split('-')
                }

                if (index) {
                    currentData = currentData[key][index]
                } else {
                    currentData = currentData[key]
                }
            })


            currentData[last] = value

            return data
        }

        state.data = update(state.data, state.pathToEdit, val)
    }
}


export const actions = {
    async FETCH_DATA({ commit, state }, width) {
        commit('SET_LOADING', true)
        const { data } = await this.$axios.get('/api/getPageData')

        commit('SET_DATA', JSON.parse(data.data))
        commit('SET_LOADING', false)
    },

    async SAVE_DATA({ commit, state }) {
        commit('SET_LOADING', true)
        const { data } = await this.$axios.post('/api/savePageData', state.data)
        commit('SET_DATA', JSON.parse(data.data))
        commit('SET_LOADING', false)
    },
}
