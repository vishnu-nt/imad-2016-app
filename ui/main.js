console.log('Loaded!');
var element= document.getElementById('maintext');
element.innerHTML= 'new';
var img = document.getElementById('madi');
marginLeft=0;
function moveright(){
    marginLeft=marginLeft+1;
    img.marginLeft= 'px';
}
img.onclick = function() {
    var interval = setInterval(moveright,100);
};