<template>
  <el-dialog
      title="Edit element"
      :visible.sync="editDialogOpen"
      width="30%"
      :before-close="closeDialog">
    <div>
      <el-input
          v-if="type === 'simple'"
          v-model="val"
          placeholder="Please input"
          clearable>
      </el-input>
    </div>

    <span slot="footer" class="dialog-footer">
      <el-button @click="closeDialog">Cancel</el-button>
      <el-button type="primary" @click="save">Confirm</el-button>
    </span>
  </el-dialog>
</template>

<script>
import {mapState} from "vuex";

export default {
  name: 'PageElementEditor',

  data: () => ({
    val: null,
  }),

  watch: {
    editDialogOpen() {
      if (this.$store.state.modules.common.site.pathToEdit) {
        this.val = this.$store.getters['modules/common/site/GET_DATA_BY_PATH'](
            this.$store.state.modules.common.site.pathToEdit
        )
      }
    }
  },

  computed: {
    ...mapState({
      editDialogOpen: state => state.modules.common.site.editDialogOpen,
      type: state => state.modules.common.site.editorType,

    }),

    menuMode() {
      return this.pageTypeIs(['sm', 'xs']) ? 'vertical' : 'horizontal'
    }
  },

  methods: {
    save() {
      this.$store.commit('modules/common/site/CHANGE_DATA', this.val)
      this.$store.dispatch('modules/common/site/SAVE_DATA')
      this.closeDialog()
      this.$message({
        message: 'Data saved.',
        type: 'success',
        offset: 100
      });
    },

    closeDialog() {
      this.$store.commit('modules/common/site/CLOSE_EDITOR')
    }
  }
}
</script>
