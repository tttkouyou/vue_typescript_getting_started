<template>
  <div class="back-shadow"></div>
</template>

<script>
export default {};
</script>

<style scope>
.back-shadow {
  z-index: 10;

  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;

  position: absolute;
  top: 0;
  left: 0;

  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
