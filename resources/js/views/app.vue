<template>
  <div class="mdl-grid">
    <div class="mdl-cell mdl-cell--6-col">
      <div class="header">
        Вы кто?
      </div>
      <div>
        <a href="/admin">Администратор</a>
        <a href="/user">Пользователь</a>
      </div>
    </div>
  </div>
</template>
<script>
const default_layout = "default";

export default {
  computed: {},
  data() {
    return {
      message: "Hello World",
    };
  },
};
</script>