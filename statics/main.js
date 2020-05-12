/* add event listener to emelemnts and hide advertisement */
document.addEventListener("DOMContentLoaded", (event) => {
  var img = document.getElementById("ad");
  img.style.right = "-230px";
  img.addEventListener("mouseout", hideAd);
  img.addEventListener("mouseover", showAd);

  document.getElementById("up").addEventListener("click", topFunction);
});

/* showing the advertisement */
function showAd() {
  var pos = -230;
  var img = document.getElementById("ad");

  var id = setInterval(function () {
    if (pos >= 0) {
      clearInterval(id);
    } else {
      pos = pos + 4;
      img.style.right = pos + "px";
    }
  }, 4);
}

/* hiding the advertisement */
function hideAd() {
  var pos = 0;
  var img = document.getElementById("ad");

  var id = setInterval(function () {
    if (pos <= -230) {
      clearInterval(id);
    } else {
      pos = pos - 4;
      img.style.right = pos + "px";
    }
  }, 5);
}

/* returning to the top of the page */
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

/* expanding the image */
function myFunction(imgs) {
    var expandImg = document.getElementById("expandedImg");
    var imgText = document.getElementById("imgtext");
    expandImg.src = imgs.src;
    imgText.innerHTML = imgs.alt;
    expandImg.parentElement.style.display = "block";
    expandImg.style.height = '700px';
    expandImg.style.width = '1300px';
  }
