<template>
  <div data-cy="item-card" class="contact-item__wrapper">
    <div class="contact-item__first-row">
      <p data-cy="item-name" class="contact-item__name">{{ full_name }}</p>
      <div class="contact-item__button-wrapper">
        <button data-cy="btn-edit" class="contact-item__button contact-item__edit-button" @click="onEdit">Edit</button>
        <button data-cy="btn-delete" class="contact-item__button contact-item__delete-button" @click="onDelete">Delete</button>
      </div>
      <div class="contact-item__button-wrapper"></div>
    </div>
    <div class="contact-item__second-row">
      <p class="contact-item__phone-email">
        <span data-cy="item-phone">{{ phone_number }}</span> |
        <span data-cy="item-email">{{ email }}</span>
      </p>
    </div>
  </div>
</template>

<script>
// TODO:
// 1. Buat sebuah fungsi untuk men-dispatch fungsi menghapus kontak yang sudah dibuat sebelumnya di store/index.js dan memanggil fungsi getAllContactsData yang ada di file ContactManagerView untuk refresh data kontak
// 2. Buat button edit dengan properti data-cy nya btn-edit, class nya contact-item__button dan contact-item__edit-button serta menjalankan fungsi setSelectedData yang ada di halaman ContactManagerView ketika di klik
// 3. Buat button hapus dengan properti data-cy nya btn-delete, class nya contact-item__button dan contact-item__delete-button serta menjalankan fungsi menghapus kontak yang sudah dibuat sebelumnya ketika di klik
// 4. Kedua button tersebut dibuat di dalam elemen div dengan class contact-item__button-wrapper

export default {
  name: "ContactItem",
  props: {
    id: Number,
    full_name: String,
    phone_number: String,
    email: String,
  },
  methods: {
    async onDelete() {
      await this.$store.dispatch("deleteContact", {
        id: this.id
      });
      this.$parent.getAllContactsData();
    }, 
    async onEdit ()
    {
      this.$parent.setSelectedData(this.id, this.full_name, this.phone_number, this.email); 
    },
  },
};
</script>

<style lang="scss" scoped>
.contact-item {
  &__wrapper {
    margin-bottom: 12px;
    width: 90%;
    height: 48px;
    padding: 24px;
    border-radius: 8px;
    background: #ffffff;
    box-shadow: 0 6px 10px rgb(0 0 0 / 10%);
  }

  &__first-row {
    display: flex;
    justify-content: space-between;
  }

  &__name {
    margin: 0;
  }

  &__phone-email {
    margin: 0;
  }

  &__button-wrapper {
    display: flex;
    gap: 8px;
  }

  &__button {
    min-width: 64px;
    height: 36px;
    padding-left: 12px;
    padding-right: 12px;
    border: none;
    border-radius: 4px;
    font-size: 14px;
    font-weight: bold;
    color: #ffffff;
  }

  &__edit-button {
    background: #16abf8;
  }

  &__delete-button {
    background: #dc3545;
  }
}
</style>