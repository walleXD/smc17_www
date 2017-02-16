<template>
  <div class="hero-head">
    <header class="nav">
      <div class="container">
        <div class="nav-left">
          <a class="nav-item">
            <img src="~assets/img/smc17_logo.png" alt="Logo">
            <span>SMC'17</span>
          </a>
        </div>
        <span class="nav-toggle" v-on:click="changeMobileNav" v-bind:class="{ 'is-active': isActive }">
          <span></span>
          <span></span>
          <span></span>
        </span>
        <div class="nav-right nav-menu" v-bind:class="{ 'is-active': isActive }">
          <a class="nav-item">
            Panels
          </a>
          <a class="nav-item">
            Speakers
          </a>
          <a class="nav-item">
            Location
          </a>
          <a class="nav-item">
            Sponsors
          </a>
          <span class="nav-item">
            <a class="button is-success is-primary" href="https://www.eventbrite.com/e/student-media-con-2017-tickets-29935948227" target="_blank">
              <span class="icon">
                <i class="fa fa-ticket" aria-hidden="true"></i>
              </span>
              <span>Get Tickets</span>
            </a>
          </span>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
  export default {
    components: {},
    methods: {
      changeMobileNav (event) {
        event.preventDefault();
        this.isActive = !this.isActive;
      }
    },
    data: function () {
      return {
        isActive: false
      };
    }
  };
</script>

<style lang="scss" scoped>
  .hero-head {
    z-index: 1;
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.4);
    position: fixed;
    top: 0;
    width: 100%;
    background-color: white;
  }
</style>
