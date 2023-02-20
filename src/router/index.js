import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home/Home.vue";
import About from "../views/About/About.vue";
import Users from "../views/Users/Users.vue";
import Range from "../views/Range/Range.vue";
import Extra from "../views/Extra/Extra.vue";
import Profile from "../views/Profile/Profile.vue";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", name: "Home", component: Home },
    { path: "/about", name: "About", component: About },
    { path: "/users", name: "Users", component: Users },
    { path: "/range", name: "Range", component: Range },
    { path: "/extra", name: "Extra", component: Extra },
    { path: "/profile", name: "Profile", component: Profile },
  ],
});

export default router;
