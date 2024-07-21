let elChaneAvatar = document.querySelector(".change-avatar")
let elUploadimg = document.querySelector(".upload-img")

elChaneAvatar.addEventListener("change", function(evt){
    elUploadimg.src = URL.createObjectURL(evt.target.files[0])
})