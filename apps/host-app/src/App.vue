<template>
  <div class="container">
    <h2>Host App</h2>
    <p>This is the host app which consumes the remote component</p>
    <!--
      Alternatively, you can use the following approach to conditionally render the remote component:
      <component :is="RemoteView" v-if="RemoteView" />
    -->
    <RemoteView />
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";

export default {
  components: {
    RemoteView: defineAsyncComponent(() => import("remoteApp/RemoteView")),
  },
  // Alternatively, you can use the following approach to load the remote component:
  // data() {
  //   return {
  //     RemoteView: null,
  //   };
  // },
  // async mounted() {
  //   const module = await import("remoteApp/RemoteView");
  //   this.RemoteView = module.default;
  // },
};
</script>

<style scoped>
.container {
  font-family: Roboto, sans-serif;
  padding: 20px;
  background-color: #dddddd;
  border-radius: 8px;
}
</style>
