/* Window Size Type */
function changeSizeType(store, windowWidth) {
    store.dispatch('modules/common/window/CHANGE_WINDOW_WIDTH', windowWidth)

    let currentSizeType = null

    if (windowWidth < 600) {
        currentSizeType = 'xs'
    } else if (windowWidth >= 600 && windowWidth < 960) {
        currentSizeType = 'sm'
    } else if (windowWidth >= 960 && windowWidth < 1264) {
        currentSizeType = 'md'
    } else if (windowWidth >= 1264) {
        currentSizeType = 'lg'
    }

    if (currentSizeType !== store.state.modules.common.window.sizeType) {
        store.dispatch('modules/common/window/CHANGE_CONTENT_SIZE_TYPE', currentSizeType)
    }
}

/* Window Scrolling Type */
function changeScrollType(store, pageYOffset) {
    const isStateScrolling = store.state.modules.common.window.isScrolling

    store.dispatch('modules/common/window/CHANGE_WINDOW_Y_OFFSET', pageYOffset)

    if ((isStateScrolling && pageYOffset > 0) || (!isStateScrolling && pageYOffset === 0)) {
        return
    }

    if (!isStateScrolling && pageYOffset > 0) {
        store.dispatch('modules/common/window/CHANGE_CONTENT_HAS_SCROLLING', true)
    }
    if (isStateScrolling && pageYOffset === 0) {
        store.dispatch('modules/common/window/CHANGE_CONTENT_HAS_SCROLLING', false)
    }
}

export default ({ store }) => {
    store.dispatch('modules/common/window/CHANGE_WINDOW_HEIGHT', window.innerHeight)
    changeSizeType(store, window.innerWidth)
    changeScrollType(store, window.pageYOffset)

    window.onresize = () => {
        changeSizeType(store, window.innerWidth)
    }

    const Visible = function (elementSelector) {
        const target = document.querySelector(elementSelector)

        if (!target) {
            return
        }

        const targetPosition = {
            top: window.pageYOffset + target.getBoundingClientRect().top,
            bottom: window.pageYOffset + target.getBoundingClientRect().bottom
        }

        const windowPosition = {
            top: window.pageYOffset,
            bottom: window.pageYOffset + document.documentElement.clientHeight
        }

        if (targetPosition.bottom > windowPosition.top
            && targetPosition.top < windowPosition.bottom) {
            store.dispatch('modules/common/window/CHANGE_VISIBLE_ELEMENT', elementSelector)
        } else {
            store.dispatch('modules/common/window/CHANGE_UNVISIBLE_ELEMENT', elementSelector)
        }
    }

    window.onscroll = () => {
        changeScrollType(store, window.pageYOffset)

        store.state.modules.common.window.watchElements.forEach(elementSelector => {
            Visible(elementSelector)
        })
    }
}
