<template>
  <i
    @click="edit(path, editorType)"
    :class="{'editable': editMode}"
    class="el-icon-edit"
  >
    <slot></slot>
  </i>
</template>

<script>
import PageDataMixin from "@/mixins/page-data-mixin";

export default {
  name: 'EditableData',

  mixins: [PageDataMixin],

  props: {
    path: {
      type: String,
      default: null
    },

    editorType: {
      type: String,
      default: 'simple'
    }
  }
}
</script>
