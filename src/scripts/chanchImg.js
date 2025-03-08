const image1 = require('../infoTags/media/image/2.jpg')
const image2 = require('../infoTags/media/image/4.jpg')

var myImag = document.getElementById('image-revirse');
myImag.onclick = function() {
      var imgAbout = myImag.getAttribute('about');
      if (imgAbout === "image1"){
            myImag.setAttribute("src", image2)
            myImag.setAttribute("about", 'image2')
      } else {
            myImag.setAttribute('src', image1)
            myImag.setAttribute('about', 'image1')
      }
}
