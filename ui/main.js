var button = document.getElementById('counter');
var counter = 0;
button.onclick = function() {
    
    var request = new XMLHttpRequest();
    request.onreadystatechange = function(){
      if (request.readtstate === XMLHttpRequest.DONE){
          if(request.status === 200){
              var span = document.getElementById('count');
  span.innerHTML = counter.toString();
              
          }
      }  
    };
 request.open('GET','http://vishnu-nt.imad.hasura-app.io/counter',true);
 request.send(null)
  
};