<template>
  <div>
    <Artwork />
    <nuxt id="nuxt" />
  </div>
</template>

<script>
</script>
<style lang="scss">
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: 'Sawarabi Mincho', sans-serif;
}

.vibes {
  font-family: 'Great Vibes', cursive;
}

.roboto {
  font-family: 'Roboto', sans-serif;
}

.sawarabi {
  font-family: 'Sawarabi Mincho', sans-serif;
}

.blue-glass {
  margin: 10px 5px;
  padding: 20px 20px;
  background: rgb(239, 255, 255, 0.6);
  border-radius: 10px;
}

@media screen and (max-width: 600px) {
  .blue-glass {
    padding: 15px;
  }
}

@media screen and (max-width: 400px) {
  div {
    font-size: 13px;
  }
}
</style>
