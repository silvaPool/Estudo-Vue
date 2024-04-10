let app = new Vue({

    el: "#app",
    data: {
        title: "Matheus Silva Portfolio",
        titleHTML: "Matheus Silva <span class='badge'>portfolio</span>",
        projects: [
            {title: "portfolio", languages: ["HTML", "CSS", "VueJS"]},
            {title: "grocery shop", languages: ["HTML", "CSS", "PHP"]},
            {title: "blog", languages: ["HTML", "CSS", "PHP"]},
            {title: "automation script", languages: ["Python"]},
            {title: "eCommerce", languages: ["HTML", "CSS", "PHP"]},
        ],
        dynamicId : "projects_section",
        dynamicClass : "projects"
    }
})