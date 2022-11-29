<template>
  <div class="hello">
    <!-- insert logo devcode on img element -->
    <img alt="Devcode logo" src="../assets/devcode-logo.png" />
    <div data-cy="hello-world-title">
      <!-- insert header element here -->
      <h1>Welcome to Devcode!</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.hello {
  margin: 15% 0 0;

  img {
    width: 15%;
    height: 15%;
  }
}
</style>
