let fullImgbox=document.getElementById("fullimgbox")
let fullImg=document.getElementById("fullimg")
function openfullimg(pic){
   fullImgbox.style.display="flex"//image to be enlarged
    fullImg.src=pic;//clicked image tobe enlarged
}
function closefullimg(){
    fullImgbox.style.display="none";

}