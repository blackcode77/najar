import Vue from 'vue'

export const methods = {
  getDataFile() {
    const data = require(`~/data/page.json`)

    return data
  },
}

Vue.mixin({
  methods,
})
