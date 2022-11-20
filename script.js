var itemArray = [];
var xArray = [];
var yArray = [];
var wArray = [];
var hArray = [];


function showPreview(event){
  if(event.target.files.length > 0){
    var src = URL.createObjectURL(event.target.files[0]);
    var imgElement = document.getElementById("imgfilePreview");
    imgElement.src = src;
    imgElement.style.display = "block";
  }
};

function clickedTransparentDiv(){
  alert("clicked transparent button");
}

// // track cursor x & y coordinates
// document.addEventListener('click', printMousePos, true);
// function printMousePos(e){
//       cursorX = e.pageX;
//       cursorY= e.pageY;
//       alert( "pageX: " + cursorX +",pageY: " + cursorY );
// }

function fetchFunc(){
  // fetch("https://durhackapi.azurewebsites.net/img_upload")
  fetch("test.json")
    .then(res => res.json())
    .then(d => {
      // console.log(d);
      picWidth = parseInt(d[0]);
      picHeight = parseInt(d[1]);
      d.splice(0, 2);
      // console.log(d);
      itemArray = [];
      xArray = [];
      yArray = [];
      wArray = [];
      hArray = [];
      for (let i = 0; i < d.length; i++) { 
          itemArray.push(d[i][0]);
          xArray.push(parseInt(d[i][1]));
          yArray.push(parseInt(d[i][2]));
          wArray.push(parseInt(d[i][3]));
          hArray.push(parseInt(d[i][4]));
      }
      // console.log(itemArray);
      // console.log(xArray);
      // console.log(yArray);
      // console.log(wArray);
      // console.log(hArray);
    })
    createTransparentDiv();
}

function createTransparentDiv(){
  let list = document.getElementById("resultList")
  list.innerHTML = ""    // empty current resultList

  for (let i = 0; i < itemArray.length; i++) { 
    let parentDiv = document.getElementById('emptyTransparentDiv');
    let newDiv = document.createElement("div");
    newDiv.id = "transparentDiv" ;
    newDiv.className = "transparentDiv";
    newDiv.style.right = String(parseInt((((picWidth - wArray[i] - xArray[i])/picWidth))*100)) + "%";
    console.log("left: " + String(parseInt((picWidth - ((picWidth - wArray[i] - xArray[i])/picWidth))*100)) + "%");
    console.log(picWidth)
    console.log(wArray[i])
    console.log(xArray[i])
    newDiv.style.top = String(parseInt((yArray[i]/picHeight)*100)) + "%";
    // console.log("top: " + String(parseInt((yArray[i]/picHeight)*100))+ "%");
    newDiv.style.width = String(parseInt((wArray[i]/picWidth)*100)) + "%";
    // console.log("width: " + String(parseInt((wArray[i]/picWidth)*100))+ "%");
    newDiv.style.height = String(parseInt((hArray[i]/picHeight)*100)) + "%";
    // console.log("height: " + String(parseInt((hArray[i]/picHeight)*100)) + "%");
    newDiv.onclick = "clickedTransparentDiv"// #TODO
    parentDiv.appendChild(newDiv);  
    };
  }


// fetch("https://durhackapi.azurewebsites.net/img_upload")
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



