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
    }
  };
</script>

<style>

</style>
