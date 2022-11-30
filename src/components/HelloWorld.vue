<template>
  <div class="hello">
    <!-- insert devcode logo source to img element -->
    <img
      data-cy="devcode-logo"
      src="../assets/devcode-logo.png"
      alt="devcode logo"
    />
    <div data-cy="devcode-title">
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
