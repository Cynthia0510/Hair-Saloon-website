function savepassword(){
    var password= confirm("Allow browser to save your details?");
}

function feedback(){
    var password= alert("Thank you for your feedback.\n Our business is to serve you better");
}

function password(){
    var i = 0;
    var images = [];
    images[0] = "PICS/hide.png";
    images[1] = "PICS/show.png";
    var set = document.try.show.type;

    if(set =='text'){
    document.try.show.type = 'password'; 
    document.change.src = images [0];
    }else{
    document.try.show.type = 'text';
    document.change.src = images [1];
    }
}

function idsizing(){
    
}


