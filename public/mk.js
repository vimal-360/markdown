
document.querySelectorAll("[m-model]").forEach((el) => {
    const key = el.getAttribute("m-model");
    let parentWithComponent = el.closest('[m-component]');
    if (!parentWithComponent){
        return;
    }

    let url = parentWithComponent.getAttribute("m-component");

    el.value = window[key];
    el.addEventListener("input", (e) => {
        window[key] = e.target.value;

        let value = e.target.value;
        
        fetch(url, {
            method: "POST",
            headers: {
                "X-Markup-Component": "true",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "model": {
                    [key]: value
                }
            }),
        }).then(res=>res.text()).then(data=>{
            //find replace with .replace and set innerHTML
            parentWithComponent.querySelector(".replace").innerHTML = data;

        });

    });
    }
);






//select all m-click
document.querySelectorAll("[m-click]").forEach((el) => {
    let parentWithComponent = el.closest('[m-component]');
    if (!parentWithComponent){
        return;
    }

    let url = parentWithComponent.getAttribute("m-component");
    el.addEventListener("click", (e) => {
        fetch(url, {
            method: "POST",
            headers: {
                "X-Markup-Component": "true",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "click": {
                    "fn": el.getAttribute("m-click"),
                    "args": [],
                },
            }),
        });
    });
});