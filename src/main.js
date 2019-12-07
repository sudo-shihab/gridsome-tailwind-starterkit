// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

/** JS IMPORTS */
// global level / lib imports

// app level imports
import DefaultLayout from "~/layouts/Default.vue";

/** CSS BASE IMPORTS */
// global level / lib imports

//app level imports
import "@/app.css";

export default function(Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component("Layout", DefaultLayout);
}
