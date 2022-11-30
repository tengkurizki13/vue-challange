<template>
  <div>
    <h1>Selamat datang di Devcode!</h1>
    <h2>
      Silahkan klik tombol di bawah ini untuk melihat hasil akhir dari perubahan
      yang kamu lakukan.
    </h2>
    <router-link to="/hello">Lihat hasil</router-link>
  </div>
</template>

<script>
export default {
  name: "WelcomeCard",
};
</script>

<style lang="scss" scoped>
a {
  padding: 12px;
  background: aqua;
  color: #2c3e50;
  text-decoration-line: none;
  border-radius: 8px;
}
</style>
