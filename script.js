var kanyeUrl = "http://api.kanye.rest";
var taylorUrl = "https://api.taylor.rest";
var trumpUrl = "https://www.tronalddump.io/random/quote";
var textArray = [];
textArray[0] = "<p>YOU GOT IT SON</p>";
textArray[1] = "<p>WRONG CHOICE BRO</p>";
textArray[2] = "<p>don't press the button twice.</p>"



var el = document.getElementById("getButton");
if(el){
  el.addEventListener("click", function(event){
    event.preventDefault();
    // const value = document.getElementById("")
    var y = document.getElementById("answerBox");
    y.style.display = "none";
    const url = getUrl();;
    fetch(url)
      .then(function(response){
        return response.json();
      }).then(function(json){
        console.log(json);
        let quote = getQuote(url, json);
        console.log(quote);
        let results = "";
        results += '<h2>Your Blessing</h2>';
        results += '<p>' + quote + '</p>';
        document.getElementById("blessing").innerHTML = results;
      });
    var x = document.getElementById("guessBoxBox");
    x.style.display = "flex";

    isRightBox(url);




  })
}
function isRightBox(url){
  var box1 = document.getElementById("box1");
  var count = 0;
  if(box1){
    box1.style.cursor = 'pointer';
    box1.onclick = function(){
      var newcount = count % textArray.length;
      var z = document.getElementById("answerBox");
      var y = document.getElementById("innerAnswerBox");
      z.style.display = "block";
      if(newcount > 1){
        newcount = count % textArray.length;
        y.innerHTML = textArray[newcount];
        count++;
        return;
      }
      else if (url == kanyeUrl){
        count = 0;
        count++;
        count++;
        y.innerHTML = textArray[0];
        console.log("TRUE");
        return true;
      }else{
        count++;
        count++;
        newcount = count % textArray.length;
        y.innerHTML = textArray[1];
        console.log("FALSE");
        return false;
      }
      count++;
    }
  }
  var box2 = document.getElementById("box2");
  var count = 0;
  if(box2){
    box2.style.cursor = 'pointer';
    box2.onclick = function(){
      var newcount = count % textArray.length;
      var z = document.getElementById("answerBox");
      var y = document.getElementById("innerAnswerBox");
      z.style.display = "block";
      if(newcount > 1){
        newcount = count % textArray.length;
        y.innerHTML = textArray[newcount];
        count++;
        return;
      }
      else if (url == taylorUrl){
        count = 0;
        count++;
        count++;
        y.innerHTML = textArray[0];
        console.log("TRUE");
        return true;
      }else{
        count++;
        count++;
        newcount = count % textArray.length;
        y.innerHTML = textArray[1];
        console.log("FALSE");
        return false;
      }
      count++;
    }
  }
  var box3 = document.getElementById("box3");
  var count = 0;
  if(box3){
    box3.style.cursor = 'pointer';
    box3.onclick = function(){
      var newcount = count % textArray.length;
      var z = document.getElementById("answerBox");
      var y = document.getElementById("innerAnswerBox");
      z.style.display = "block";
      if(newcount > 1){
        newcount = count % textArray.length;
        y.innerHTML = textArray[newcount];
        count++;
        return;
      }
      else if (url == trumpUrl){
        count = 0;
        count++;
        count++;
        y.innerHTML = textArray[0];
        console.log("TRUE");
        return true;
      }else{
        count++;
        count++;
        newcount = count % textArray.length;
        y.innerHTML = textArray[1];
        console.log("FALSE");
        return false;
      }
      count++;
    }
  }


}

function getRandomInt(max){
  return Math.floor(Math.random() * max);
}

function getUrl(){
  let x = getRandomInt(3);
  if (x == 0) {
    return kanyeUrl;
  }else if(x == 1){
    return trumpUrl;
  }else {
    return taylorUrl;
  }
}

function getQuote(url, json){
  if(url == kanyeUrl || url == taylorUrl){
    return json.quote;
  }else{
    return json.value;
  }
}
