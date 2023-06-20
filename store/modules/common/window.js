export const state = () => ({
    width: '',
    height: '',
    sizeType: '',
    isScrolling: false,
    pageYOffset: 0,
    watchElements: [],
    visibleElements: []
})


export const mutations = {
    SET_WINDOW_WIDTH(state, width) {
        state.width = width
    },

    SET_WATCH_ELEMENT(state, elementName) {
        if (!state.watchElements.includes(elementName)) {
            state.watchElements.push(elementName)
        }
        state.watchElements.push(elementName)
    },

    SET_VISIBLE_ELEMENT(state, elementName) {
        if (!state.visibleElements.includes(elementName)) {
            state.visibleElements.push(elementName)
        }
    },

    SET_UNVISIBLE_ELEMENT(state, elementName) {
        if (state.visibleElements.includes(elementName)) {
            state.visibleElements.splice(state.visibleElements.indexOf(elementName), 1)
        }
    },

    SET_WINDOW_HEIGHT(state, height) {
        state.height = height
    },

    SET_CONTENT_SIZE_TYPE(state, sizeType) {
        state.sizeType = sizeType
    },

    SET_CONTENT_HAS_SCROLLING(state, isScrolling) {
        state.isScrolling = isScrolling
    },

    SET_WINDOW_Y_OFFSET(state, pageYOffset) {
        state.pageYOffset = pageYOffset
    }
}


export const actions = {
    CHANGE_WINDOW_WIDTH({ commit }, width) {
        commit('SET_WINDOW_HEIGHT', width)
    },

    CHANGE_WATCH_ELEMENT({ commit }, elementName) {
        commit('SET_WATCH_ELEMENT', elementName)
    },

    CHANGE_VISIBLE_ELEMENT({ commit }, elementName) {
        commit('SET_VISIBLE_ELEMENT', elementName)
    },

    CHANGE_UNVISIBLE_ELEMENT({ commit }, elementName) {
        commit('SET_UNVISIBLE_ELEMENT', elementName)
    },

    CHANGE_WINDOW_HEIGHT({ commit }, width) {
        commit('SET_WINDOW_WIDTH', width)
    },

    CHANGE_CONTENT_SIZE_TYPE({ commit }, sizeType) {
        commit('SET_CONTENT_SIZE_TYPE', sizeType)
    },

    CHANGE_CONTENT_HAS_SCROLLING({ commit }, isScrolling) {
        commit('SET_CONTENT_HAS_SCROLLING', isScrolling)
    },

    CHANGE_WINDOW_Y_OFFSET({ commit }, pageYOffset) {
        commit('SET_WINDOW_Y_OFFSET', pageYOffset)
    }
}
