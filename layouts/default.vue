<template>
  <div>
    <section class="hero">
      <nav-bar />
    </section>
    <nuxt />
    <nav-footer />
  </div>
</template>

<script>
  import NavBar from '~components/NavBar';
  import NavFooter from '~components/Footer';

  export default {
    components: {
      NavBar,
      NavFooter
    },
    head () {
      return {
        titleTemplate: '%s - SMC\'17'
      };
    }
  };
</script>

<style>

</style>
