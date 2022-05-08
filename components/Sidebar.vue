<template>
  <div id="sidebar" class="white-glass">
    <div id="side-area">
      <nav>
        <h1 class="vibes">usagrada's portfolio</h1>
        <div class="section--list">
          <div v-scroll-to="{ element: '#about', duration: 200 }">About</div>
          <div v-scroll-to="{ element: '#interests', duration: 200 }">
            Interests
          </div>
          <div v-scroll-to="{ element: '#skills', duration: 200 }">Skills</div>
          <div v-scroll-to="{ element: '#works', duration: 200 }">Works</div>
          <div v-scroll-to="{ element: '#contact', duration: 200 }">
            Contact
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>
<style lang="scss" scoped>
#sidebar {
  @media screen and (max-width: 768px) {
    h1 {
      font-size: 32px;
    }
    div {
      font-size: 18px;
    }
  }
  @media screen and (max-width: 450px) {
    h1 {
      font-size: 20px;
    }
    div {
      font-size: 12px;
    }
  }
}

.white-glass {
  background: rgb(255, 239, 255, 0.6);
}

#side-area {
  position: fixed;
  width: min(240px, 30%);
  height: 100vh;
  top: 0;
  z-index: 1;

  nav {
    padding: 0 15px;
    height: calc(95vh - 30px);
    h1 {
      padding: 15px 0;
      text-align: center;
    }

    @media screen and (max-width: 768px) {
      height: 80vh;
      padding: 0 10px;
    }
  }
}

.section--list {
  margin: 0 20px;
  @media screen and (max-width: 600px) {
    margin: 0 5px;
  }

  list-style: none;
  text-align: center;

  div {
    font-family: 'Sawarabi Mincho', sans-serif;
    padding: 5px 0;
  }

  div:hover {
    text-decoration: underline;
    cursor: pointer;
  }
}
</style>
