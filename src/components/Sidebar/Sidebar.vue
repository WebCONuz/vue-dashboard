<template>
  <div v-if="toggle" class="bg-white w-[320px] min-h-screen shadow-lg">
    <RouterLink
      to="/"
      class="text-2xl font-bold bg-white p-5 text-center block text-indigo-600"
    >
      ADMIN DASHBOARD
    </RouterLink>

    <ul class="list mt-8">
      <li class="list__item py-1 px-2" v-for="item in navlink" :key="item.id">
        <RouterLink
          :to="item.link"
          class="flex items-center text-lg rounded-lg shadow border list__item-link min-w-full hover:bg-indigo-50 duration-200 font-medium bg-white p-4"
        >
          <i class="bx text-indigo-500 text-2xl mr-3" :class="item.icon"></i>
          <span>{{ item.title }}</span>
        </RouterLink>
      </li>
    </ul>
  </div>
</template>

<script>
import navlinks from "../../constants/Navlink";
import { RouterLink } from "vue-router";

export default {
  name: "Sidebar",
  props: {
    toggle: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      navlink: navlinks,
    };
  },
};
</script>

<style scoped>
.list li .router-link-active {
  background-color: rgb(107, 8, 177) !important;
  color: #fff;
  font-weight: 600 !important;
}
.list li .router-link-active i {
  color: #fff;
}
</style>
