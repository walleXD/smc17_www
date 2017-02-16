<template>
  <div>
    <land-section />
    <about-section />
    <location-section />
    <why-section />
    <smc-sixteen />
    <contact-section />
  </div>
</template>

<script>
  import LandSection from '~components/LandSection';
  import AboutSection from '~components/AboutSection';
  import LocationSection from '~components/LocationSection';
  import WhySection from '~components/WhySection';
  import SmcSixteen from '~components/SmcSixteen';
  import ContactSection from '~components/ContactSection';

  export default {
    components: {
      LandSection,
      AboutSection,
      LocationSection,
      WhySection,
      SmcSixteen,
      ContactSection
    },
    head() {
      return {
        title: 'Home'
      }
    }
  };
</script>

<style lang="scss">
</style>
