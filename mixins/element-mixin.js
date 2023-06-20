import { mapState } from 'vuex'

const PageType = {
    computed: {
        ...mapState({
            windowSizeType: state => state.modules.common.window.sizeType,
        }),


    },

    methods: {
        pageTypeIs(types = []) {
            return types.includes(this.windowSizeType)
        }
    }
}

export default PageType
