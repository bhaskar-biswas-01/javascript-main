function upDate(previewPic) {
  console.log("Image focused or hovered");
  console.log("Source: " + previewPic.src);
  console.log("Alt text: " + previewPic.alt);

  let imageDiv = document.getElementById('image');
  imageDiv.innerHTML = previewPic.alt;
  imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";
}

function undo() {
  console.log("Image unfocused or mouse left");
  let imageDiv = document.getElementById('image');
  imageDiv.innerHTML = "Hover over an image below to display here.";
  imageDiv.style.backgroundImage = "url('')";
}

function addTabFocus() {
  console.log("Page loaded - adding tabindex to images");

  let previews = document.querySelectorAll('.preview');

  for (let i = 0; i < previews.length; i++) {
    previews[i].setAttribute("tabindex", "0");
  }
}
