dog=0;
cat=0;
cow=0;
tiger=0;

function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/r-1pBc5f8/model.json", modelReady)
}

function modelReady(){
    classifier.classify(gotResult)
}
dog=0;
cat=0;
cow=0;
tiger_lion=0;

function gotResult(error, results){
    if (error){
        console.error(error)
    }
    else{
        console.log(results);
        random_number_r= Math.floor(Math.random()* 255) +1;
        random_number_g= Math.floor(Math.random()* 255) +1;
        random_number_b= Math.floor(Math.random()* 255) +1;

        document.getElementById("result_confidence").innerHTML=" Detected - " + results[0].label +": "+(results[0].confidence*100).toFixed(2)+" %"+"  "+results[1].label+":"+(results[1].confidence*100).toFixed(2)+" %"+"  "+results[2].label+":"+(results[2].confidence*100).toFixed(2)+" %"+"  "+results[3].label+":"+(results[3].confidence*100).toFixed(2)+" %"+"  "+results[4].label+":"+(results[4].confidence*100).toFixed(2)+" %";
        document.getElementById("result_label").innerHTML="I can hear- "+results[0].label;
        document.getElementById("result_label").style.color = "rgb(" + random_number_r + ","+random_number_g+","+ random_number_b+ ")";
        document.getElementById("result_confidence").style.color = "rgb(" + random_number_r + ","+random_number_g+","+ random_number_b+ ")";
    
        showy_img= document.getElementById("displaying_image")

        if(results[0].label == "Barking"){
            showy_img.src= "doggy.jpg";
        } else  if(results[0].label == "Meowing"){
            showy_img.src= "catty.webp";
        } else  if(results[0].label == "Mooing"){
            showy_img.src= "cooow.webp";
        } else  if(results[0].label == "Roaring"){
            showy_img.src= "funny friends.jpeg";
        } else{
            showy_img.src= "scenee.jpeg";
        }
    }
}
