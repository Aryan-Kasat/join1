function getParagraph1(){
    var inputs= [];
    for(var i=1;i<=5;i++){
      inputs.push(document.getElementById("input_"+i).value);
    }
    inputs.join(".");
      document.getElementById("showParagraph1").innerHTML= inputs;
  }
  function getParagraph2(){
    var inputs= [];
    for(var i=1;i<=5;i++){
      inputs.push(document.getElementById("input_"+i).value);
    }
    inputs.join(".");
      document.getElementById("showParagraph2").innerHTML= inputs;
  }