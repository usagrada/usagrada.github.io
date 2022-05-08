<template>
  <div class="grid-area">
    <sidebar />
    <main class="container main--area">
      <about-section />
      <interests-section />
      <skill-section />
      <work-section />
      <contact-section />
      <footer class="footer">
        <div>&copy; 2021 usagrada</div>
        <div class="colorchange" @click="filterchange">
          {{ isgray ? 'to colorful' : 'to monochrome' }}
        </div>
      </footer>
    </main>
    <v-icon id="back-top" v-scroll-to="{ element: 'html', duration: 300 }" large>
      mdi-arrow-up-circle
    </v-icon>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import EventBus from '~/utils/eventBus'

export default Vue.extend({
  data() {
    return {
      isgray: true,
    }
  },
  methods: {
    filterchange() {
      EventBus.$emit('FILTER_CHANGE', () => {})
      this.isgray = !this.isgray
    },
  },
})
</script>

<style lang="scss" scoped>
.grid-area {
  display: grid;
  grid-template-columns: min(240px, 30%) 1fr;
}
.grid-area div {
  grid-column: 1 / 2;
}
.grid-area main {
  grid-column: 2 / 3;
  padding: 20px;
}

.contact-area {
  text-decoration: none;
  padding: 5px;
  margin: 5px;
  button span {
    vertical-align: bottom;
  }
}

.main--area {
  & section {
    margin: 20px 0;
  }

  li {
    list-style: inside;
  }

  .footer {
    text-align: center;
    font-size: 12px;
    @media screen and (max-width: 768px) {
      .colorchange {
        font-size: 8px;
      }
    }
    .colorchange {
      cursor: pointer;
    }
  }
}
#back-top {
  position: fixed;
  z-index: 1;
  bottom: 50px;
  right: 50px;
  cursor: pointer;
}
</style>
