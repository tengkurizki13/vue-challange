<template>
  <div data-cy="hello-world-title" class="hello">
    <h1>Welcome to Devcode!</h1>
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
  margin: 25% 0 0;

  h1 {
    margin: 0;
  }
}
</style>
