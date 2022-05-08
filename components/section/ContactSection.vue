<template>
  <section id="contact-section">
    <h3 id="contact">Contact</h3>
    <div class="about-detail blue-glass">
      <a href="https://github.com/usagrada" target="_blank" class="contact-area">
        <button type="button">
          <v-icon color="green"> mdi-github </v-icon>
          <span> GitHub </span>
        </button>
      </a>
      <a href="https://twitter.com/u_sagrada" target="_blank" class="contact-area">
        <button type="button">
          <v-icon color="green"> mdi-twitter </v-icon>
          <span> Twitter </span>
        </button>
      </a>
    </div>
  </section>
</template>
<style lang="scss" scoped>
.contact-area {
  padding: 10px;
  &:hover button span {
    text-decoration: underline;
  }
}
</style>
