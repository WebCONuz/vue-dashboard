<template>
  <button
    :type="btnType"
    class="px-4 py-2 rounded-sm focus:outline-none focus:ring-2 focus:ring-green-500"
  >
    {{ textContent }}
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    btnType: String,
    textContent: String,
  },
};
</script>

<style></style>
