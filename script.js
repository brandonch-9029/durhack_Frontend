function showPreview(event){
  if(event.target.files.length > 0){
    var src = URL.createObjectURL(event.target.files[0]);
    var imgElement = document.getElementById("imgfilePreview");
    imgElement.src = src;
    imgElement.style.display = "block";
  }
};
// fetch(url)
//   .then(res => res.json()
//   .then(d => {
//     // #TODO
//   })

// function fetch("/upload", {
//   method: "PUT",
//   body: formData
// })
// .then(response => response.json())
// .then(result => {
//   update_file_list(result['filename'], result['path'])
// })
// .catch(error => {
//   console.log("Error:", error);
// });



