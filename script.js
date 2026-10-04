const btns = document.querySelectorAll(".btn");

btns.forEach(btn => {
    btn.addEventListener("click", function() {
        btn.classList.add("active-btn");
        const product = btn.parentElement.parentElement;
        const extraInfo = product.querySelector(".extra-info");
        

        extraInfo.classList.toggle("show");
    })
})
