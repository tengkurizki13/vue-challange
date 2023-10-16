<template>
  <div class="input-contact__form-container">
    <h1 data-cy="header-title">{{ title }}</h1>
    <div class="input-contact__form">
      <label for="nama">Nama Lengkap</label>
      <div>
        <input
          data-cy="input-nama"
          v-model="input.full_name"
          type="text"
          name="nama"
          placeholder="Masukkan Nama Lengkap"
        />
      </div>
      <label for="telepon">No. Telepon</label>
      <div>
        <input
          data-cy="input-telepon"
          v-model="input.phone_number"
          type="text"
          name="telepon"
          placeholder="Masukkan Nomor Telepon"
        />
      </div>
      <label for="email">Email</label>
      <div>
        <input
          data-cy="input-email"
          v-model="input.email"
          type="email"
          name="email"
          placeholder="Masukkan Email"
        />
      </div>
      <button
        data-cy="btn-submit"
        :disabled="!input.full_name || !input.phone_number || !input.email"
        @click="onSubmit"
      >
        Simpan
      </button>
    </div>
  </div>
</template>

<script>
// TODO:
// 1. Buat props selectedContact dan isEdit
// 2. Buat metode untuk dispatch fungsi ubah data kontak yang sudah dibuat sebelumnya di store/index.js di dalam fungsi onSubmit
// 3. Pada fungsi onSubmit, buat percabangan dengan kondisi ketika isEdit bernilai true, maka jalankan fungsi ubah data kontak dan untuk sebaliknya, maka jalankan fungsi untuk tambah kontak baru

export default {
  name: "InputContactForm",
  props: {
    title: String,
    selectedContact: Object,
    isEdit: Boolean,
  },
  data() {
    return {
      input: {
        full_name: "",
        phone_number: "",
        email: "",
      },
    };
  },
  watch: {
    // TODO: Uncomment baris kode di bawah untuk mengisi input field dengan data kontak yang akan diubah ketika isEdit bernilai true
    isEdit(val) {
      if (val === true) {
        this.input.full_name = this.selectedContact.full_name;
        this.input.phone_number = this.selectedContact.phone_number;
        this.input.email = this.selectedContact.email;
      }
    },
  },
  methods: {
    async onSubmit() {
      if (this.isEdit)
      {
        await this.$store.dispatch("editContact", {
        id: this.selectedContact.id,
        full_name: this.input.full_name,
        phone_number: this.input.phone_number,
        email: this.input.email,
      } );
      }else{
      await this.$store.dispatch("addNewContact", {
        full_name: this.input.full_name,
        phone_number: this.input.phone_number,
        email: this.input.email,
      } );
      }
      this.resetInputValue();
      this.$parent.resetSelectedData();
      this.$parent.getAllContactsData();
    },
    resetInputValue() {
      this.input.full_name = "";
      this.input.phone_number = "";
      this.input.email = "";
    },
  },
};
</script>

<style lang="scss" scoped>
.input-contact {
  &__form-container {
    h1 {
      text-align: center;
    }
  }

  &__form {
    padding-left: 15%;
    padding-right: 15%;

    label {
      font-size: 14px;
      font-weight: bold;
    }

    input {
      margin-top: 4px;
      margin-bottom: 16px;
      width: 98%;
      height: 28px;
    }

    button {
      width: 100%;
      height: 36px;
      border: none;
      border-radius: 4px;
      font-size: 14px;
      font-weight: bold;
      background: #198754;
      color: #ffffff;

      &:disabled {
        opacity: 0.5;
      }
    }
  }
}
</style>