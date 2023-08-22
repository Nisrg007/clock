//set interval is used for unlimited print
setInterval(()=>{
    d=new Date();
    htime=d.getHours();
    mtime=d.getMinutes();
    stime=d.getSeconds();
    hrotate= 30*htime+mtime/2;  //12hr=360deg so 1hr=30deg
    mrotate=6*mtime;            //60min=360deg so 1min=6deg
    srotate=6*stime;            //60sec=360deg so 1sec=6deg

    hour.style.transform=`rotate(${hrotate}deg)`;
    minute.style.transform=`rotate(${mrotate}deg)`;
    second.style.transform=`rotate(${srotate}deg)`;


},1000)