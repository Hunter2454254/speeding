function caughtSpeeding (x,y){


    var isBirthday = x;
    var speed = y;
    
    if(isBirthdays){speed-=5;}
    
    if(speed <= 60){
        return 0;
    }
    
    else if(speed <= 80 && speed >= 61){
    return 1;
    }
    
    else{
        return 2;
    }
    
    
    }