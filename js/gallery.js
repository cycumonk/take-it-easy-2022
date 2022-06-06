document.addEventListener("click", function (e) {
    if(e.target.classList.contains("gallery-item")){
        const src = e.target.getAttribute("src");
        document.querySelector(".modal-img").src = src;
        console.log(src);
        const myModal = new bootstrap.Modal(document.getElementById('gallery-modal'))
        myModal.show();
    };
 }
 )