<template>
  <div id="app">
    <div id="nav">
      <!-- リンク先を `to` プロパティに指定します -->
      <!-- デフォルトで `<router-link>` は `<a>` タグとして描画されます -->
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>|
      <router-link to="/Basket">Basket</router-link>
    </div>
    <!-- ルートとマッチしたコンポーネントがここへ描画されます -->
    <router-view />
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({});
</script>

<style>
</style>
