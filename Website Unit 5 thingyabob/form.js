let form = document.querySelector(".form-div");

form.addEventListener("submit", function(e){
    e.perventDefault();
    let title = title.value;
    let publisher = publisher.value;
    let release = release.value;
    let image = image.value;
    let newObj = {
        "id": getNextId(),
        "title": title,
        "publisher": publisher,
        "release": release,
        "image": image };

        // submitData(newObj);
        form.reset();

});