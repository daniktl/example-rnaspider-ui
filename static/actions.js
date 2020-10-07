window.onload = function () {

    var dropRegions = document.getElementsByClassName("drop-region");


// open file selector when clicked on the drop region

    for (let i=0; i < dropRegions.length; i++) {

        let dropRegion = dropRegions[i];

        let input_field = dropRegion.querySelector("input")
        dropRegion.addEventListener('click', function () {
            input_field.click();
        });

        input_field.addEventListener("change", function () {
            let files = input_field.files;
            handleFiles(files, dropRegion);
        });

        dropRegion.addEventListener('dragenter', preventDefault, false);
        dropRegion.addEventListener('dragleave', dragLeaveCustom, false);
        dropRegion.addEventListener('dragover', dragEnterCustom, false);
        dropRegion.addEventListener('drop', handleDrop, false);
    }


}

function preventDefault(e) {
    e.preventDefault();
    e.stopPropagation();
}

function dragEnterCustom(e) {
    preventDefault(e);
    let target = e.target;
    target.classList.add("drag-enter");
    let text = target.querySelector(".drop-message")
    text.innerHTML = "Drop to upload";
}

function dragLeaveCustom(e) {
    preventDefault(e);
    let target = e.target;
    target.classList.remove("drag-enter");
    let text = target.querySelector(".drop-message")
    text.innerHTML = "Drag & Drop images or click to upload";
}


function handleDrop(e) {
    preventDefault(e);
    var dt = e.dataTransfer,
        files = dt.files, field = e.target;

    if (files.length) {

        handleFiles(files, field);

    } else {

        alert("Wrong file type. Try again")

    }

}


function handleFiles(files, field) {
    let files_list_field = field.querySelector(".drop-list")
    for (var i = 0, len = files.length; i < len; i++) {
        if (validateFile(files[i])){
            let list_item = document.createElement("div")
            console.log(files[i])
            list_item.innerHTML = files[i].name;
            files_list_field.appendChild(list_item);
        } else {

        }
    }
    let message_field = field.querySelector(".drop-message");
    message_field.innerHTML = files.length.toString() + " file(-s) selected";
}

function validateFile(input_file) {
    // check the type
    // var validTypes = ['.pdb'];
    // if (validTypes.indexOf(input_file.type) === -1) {
    //     alert("Invalid File Type");
    //     return false;
    // }

    // check the size
    let maxSizeInBytes = 10e7; // 100MB
    if (input_file.size > maxSizeInBytes) {
        alert("File is too large");
        return false;
    }

    return true;

}
