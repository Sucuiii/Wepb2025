var dataUrl = 'https://api.unsplash.com/photos?client_id=812193ef71ca946e361ed541979a0cfd91e9419a19235fd05f51ea14233f020a&per_page=10';
 
function getimg() {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', dataUrl, true);
  xhr.send();
  xhr.onload = function () {
    var data = JSON.parse(this.responseText);
    add_new_img(data);
  }
}
 
function add_new_img(dataset) {
  var gal = document.getElementById("gallery");
  gal.innerHTML = ''; // 清除舊圖片
  dataset.forEach(function(item) {
    var img = document.createElement("img");
    img.setAttribute("src", item.urls.small);
    gal.appendChild(img);
  }); 
}