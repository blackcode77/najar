import {mapState} from "vuex";

const SiteMixin = {
    computed: {
        ...mapState({
            isLogged: state => state.modules.common.user.isLogged,
        }),

        editMode() {
            return this.isLogged
        }
    },

    methods: {
        resolveData(path) {
            return this.$store.getters['modules/common/site/GET_DATA_BY_PATH'](path) ?? '-'
        },

        edit(path, editorType) {
            this.editMode && this.$store.commit('modules/common/site/OPEN_EDITOR', {
                path,
                editorType
            })
        }
    }
}

export default SiteMixin
