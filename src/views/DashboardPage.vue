<template>
  <div class="home">
    <Logo height="70px"/>
    <MainPage />
  </div>
</template>

<script>
// @ is an alias to /src
import Logo from '@/components/Logo.vue';
import MainPage from '@/components/MainPage.vue';

export default {
  name: 'Dashboard',
  components: {
    Logo,
    MainPage,
  },
};
</script>
<style>

svg {
  margin: 30px auto;
}

</style>