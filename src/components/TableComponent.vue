<script setup lang="ts">

</script>

<template>
  <div class="table">
    <div class="field">

    </div>
  </div>
</template>

<style scoped>
.table {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 750px;
  height: 577px;
  background-image: url(../assets/img/table.png);
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
}

.field {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(8, 1fr);
  height: 423px;
  width: 408px;
  margin-right: 3px;
  margin-top: 7px;
  /* background-color: rgba(255, 255, 0, 0.379); */
}
</style>
