//configurazione Vue
const app = Vue.createApp({
    data() {  
        return {
            message: "Hello Vue!",
            img: "./Vue-cover.png",
            titleClasses: "title text-light fw-bold mt-5 position-absolute start-50 top-50 translate-middle",
            imgClasses: "vh-100 vw-100"

        }
    }
});

app.mount("#root");