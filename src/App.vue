<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Dashboard</router-link> |
      <router-link to="/static-task-preview">Task Preview</router-link> |
      <router-link to="/library">VOD library</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">

body {

  padding: 0;
  margin: 0;
}

html {
  font-size: 12px;
    
  @media screen and (min-width: 900px) {
    font-size: 14px;
  }
    
  @media screen and (min-width: 1300px) {
    font-size: 16px;
  }
}

#app {

  height: 100vh;
  overflow: auto;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  background-color: #ebedf0;

}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
