<template>
  <button @click="handleClick">
    Button from packages folder 📦
  </button>
</template>

<script>
export default {
  methods: {
    handleClick() {
      alert("Hello from packages/ui");
    }
  }
}
</script>