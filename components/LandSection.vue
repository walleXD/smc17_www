<template lang="html">
  <section class="hero is-fullheight is-ligh">
    <landing-section />
    <landing-footer />
  </section>
</template>

<script>
  import LandingSection from './LandingSection';
  import LandingFooter from './LandingFooter';
  export default {
    components: {
      LandingFooter,
      LandingSection
    }
  };
</script>

<style lang="css">
</style>
