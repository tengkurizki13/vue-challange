<template>
  <div class="hello">
    <!-- insert img element with devcode logo here -->
    <div data-cy="hello-world-title">
      <!-- insert header element here -->
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
