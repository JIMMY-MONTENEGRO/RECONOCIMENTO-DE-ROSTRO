const video = document.getElementById('video');
function startVideo() {
navigator.getUserMedia=(navigator.getUserMedia||
  navigator.webkitGetUserMedia ||
  navigator.mozGetUserMedia ||
  navigator.mozGetUserMedia);
  navigator.getUserMedia(
    { video:{}},
    stream=> video.srcObjet = stream,
    err => console.long(err)  
  )

}

startVideo();