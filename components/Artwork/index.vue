<template>
  <section id="gl-area" class="artwork" :class="{ grayscale: isGrayscale }">
    <canvas ref="canvas" class="artwork__canvas"></canvas>
  </section>
</template>

<script>
import ArtworkGL from './ts/ArtworkGL'
import EventBus from '~/utils/eventBus'

export default {
  name: 'Artwork',
  components: {},
  props: [],
  data() {
    // 基本的にはここにthree.jsのオブジェクトを追加しない。
    return {
      isGrayscale: true,
    }
  },
  computed: {},
  mounted() {
    // canvas要素を渡す。
    window.addEventListener('resize', this.calculateWindowWidth)
    const glArea = document.getElementById('gl-area')
    this.artworkGL = new ArtworkGL({
      $canvas: this.$refs.canvas,
      area: {
        height: glArea.clientHeight,
        width: glArea.clientWidth,
      },
    })
    EventBus.$on('FILTER_CHANGE', this.changefilter)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.calculateWindowWidth)
  },
  destroyed() {
    EventBus.$off('FILTER_CHANGE', this.changefilter)
  },
  methods: {
    // この中にthree.jsの処理を書かない。
    calculateWindowWidth() {
      const area = { width: window.innerWidth, height: window.innerHeight }
      EventBus.$emit('WINDOW_RESIZE', area)
    },
    changefilter() {
      this.isGrayscale = !this.isGrayscale
    },
  },
}
</script>

<style>
.artwork {
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: -1;
}
.grayscale {
  /* if you want to make canvas colorize, comment out next line */
  filter: brightness(150%) grayscale(100%);
}
</style>
