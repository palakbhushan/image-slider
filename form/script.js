var i=0;
var images = [];
var time = 4000;

images[0] = '1.jpg';
images[1] = '2.jpg';
images[2] = '3.jpg';
images[3] = '4.jpg';
images[4] = '5.jpg';
images[5] = '6.jpg';

function changeImg()
{
    document.slide.src=images[i];
    if(i<images.length-1)
    {
        i++;
    }
    else{
        i=0;
    }
    setTimeout("changeImg()",time);
}

window.onload = changeImg;