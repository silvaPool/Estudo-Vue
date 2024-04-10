let app = new Vue({

    el: "#app",
    data: {
      event_name: "click"
    },
    methods: {
        runFunction() {
            console.log("test click function");
        }
    }
})