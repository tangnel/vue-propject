<template>
  <div id="app">
   <router-view v-if="isReload"/>
  </div>
</template>

<script>
// import { readdir } from 'fs';
export default {
  name:'',
   provide() {
    return {
      reload: this.reload
    }
  },
    data() {
    return {
      isReload: true
    }
  },
  methods: {
    reload() {
    this.isReload = false
    this.$nextTick(() => {
      this.isReload = true
    })
    }
  }
}
</script>
<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  padding: 0 200px;
  background-color: #38f;
  line-height: 70px;
  padding-bottom: 2px;
  color: #fff;
}
.logo {
  cursor: pointer;
}
.nav {
  display: flex;
}
.nav li {
  margin: 0 20px;
  cursor: pointer;
}
.view {
  padding: 50px 200px;
}
.active {
  font-weight: bold;
}
</style>