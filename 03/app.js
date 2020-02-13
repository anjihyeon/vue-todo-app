Vue.component("sibling-component", {
  props: ["propsdata"],
  template: "<p>{{propsdata}}</p>"
});
Vue.component("child-component", {
  props: ["propsdata"],
  template: "<p>{{propsdata}}</p>"
});
var app = new Vue({
  el: "#app",
  data: {
    message: "hello vue! passed from parent component",
    anotherMessage: "hello vue! passed from parent component"
  }
});
