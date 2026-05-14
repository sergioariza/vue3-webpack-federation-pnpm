<!-- src/components/RemoteButton.vue -->
<template>
  <div class="remote-view">
    <h3>Remote View</h3>
    <p>This is the remote view component which is consumed by the host app and imports a button from package<i>@my/ui</i></p>
    <Button />
  </div>
</template>

<script>
import { Button } from "@my/ui";

export default {
  components: {
    Button
  },
}
</script>
<style scoped>
.remote-view {
  padding: 20px;
  background-color: #eeeeee;
  border-radius: 8px;
}
</style>