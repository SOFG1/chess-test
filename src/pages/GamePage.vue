<script setup lang="ts">
import PlayerComponent from "@/components/PlayerComponent.vue";
import TableComponent from "@/components/TableComponent.vue";
import UIAlert from "@/UI/UIAlert.vue";
</script>

<template>
  <div class="wrapper">
    <PlayerComponent name="Игорь" />
    <TableComponent />
    <PlayerComponent name="Вы" :you="true" />
    <UIAlert
      title="Ожидаем готовность комнаты"
      text="Оставайтесь и одержите победу!"
    />
  </div>
</template>

<style scoped>
.wrapper {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
}
</style>
