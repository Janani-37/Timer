
function timer(){

    const date = new Date();
    let hour = date.getHours();
    const mer = hour >= 12 ? "PM" : "AM"; 
    hour = hour % 12 || 12; 
    hour = hour.toString().padStart(2,0);
    let min = date.getMinutes().toString().padStart(2,0);
    let sec = date.getSeconds().toString().padStart(2,0);

    const time = `${hour}:${min}:${sec}:${mer}`;
    document.getElementById("clock").innerText=time;
}
timer();
setInterval(timer,1000);





