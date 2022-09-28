function getTime(){
    let time = new Date();
    let hour = time.getHours();
    let minute = time.getMinutes();
    let second = time.getSeconds();

    let day = time.getDay();
    let month = time.getMonth();
    let year = time.getFullYear();

    document.querySelector(".hour").textContent = hour
    document.querySelector(".minutes").textContent = minute
    document.querySelector(".second").textContent = second

    document.querySelector(".date").textContent = day + "." + (+month + 1)+ "." + year
}
setInterval(function(){getTime();},1000); //kodumuzu hangi sıklıkla çalıştıracağımızı yazar setInterval