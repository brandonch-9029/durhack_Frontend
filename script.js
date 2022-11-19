function showPreview(event){
  if(event.target.files.length > 0){
    var src = URL.createObjectURL(event.target.files[0]);
    var imgElement = document.getElementById("file-ip-1-preview");
    imgElement.src = src;
    imgElement.style.display = "block";
  }
}
