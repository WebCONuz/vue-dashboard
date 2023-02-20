<template>
  <label :for="labelId" class="w-[300px] block my-3">
    <p class="text-indigo-500 mb-2" v-if="placeholder">{{ placeholder }}</p>
    <input
      :type="inputType"
      :id="labelId"
      class="p-3 w-full ring-2 rounded-sm focus:ring-sky-500 focus:outline-none placeholder:text-slate-700"
      :placeholder="placeholder"
    />
  </label>
</template>

<script>
export default {
  name: "Input",
  props: {
    labelId: String,
    placeholder: String,
    inputType: String,
  },
};
</script>

<style></style>
