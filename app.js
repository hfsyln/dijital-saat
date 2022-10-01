function getTime(){
    let time = new Date();
    let hour = time.getHours();
    let minute = time.getMinutes();
    let second = time.getSeconds();
        

    let day = time.getDate();
    console.log(time)
    console.log(day)
    let month = time.getMonth();
    let year = time.getFullYear();
    let günler = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "C.tesi"]
    let haftagün = (günler[time.getDay()])
    if(second <= 9){
        second = "0" + second
    };
    if(minute <= 9){
        minute = "0" + minute
    };

    document.querySelector(".hour").textContent = hour
    document.querySelector(".minutes").textContent = minute
    document.querySelector(".second").textContent = second
    
    document.querySelector(".date").textContent = day + "." + (+month + 1)+ "." + year + " " + haftagün
}
setInterval(function(){getTime();},1000); //kodumuzu hangi sıklıkla çalıştıracağımızı yazar setInterval


if(hour == document.querySelector(".saat").value && minute == document.querySelector(".dakika").value && haftagün ==document.querySelector(".gün").value ){

    foo();
    function foo() {
      body.style.background = "red";

      audio.src = "ses indir ve ekle";
}