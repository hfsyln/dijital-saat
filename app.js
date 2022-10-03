let ses = document.querySelector("audio");
let buton = document.querySelector(".buton");
let buton2 = document.querySelector(".buton2");
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

    let zaman = `${hour}:${minute}`
    console.log(zaman)

    let alarm = `${document.querySelector(".saat").value}:${document.querySelector(".dakika").value}`
    console.log(alarm)


console.log(buton)
buton.addEventListener("click", ()=> {
    console.log(   "buton cilick")
    if(document.querySelector(".saat").value && document.querySelector(".dakika").value ){
        document.querySelector(".uyarı").innerHTML = `Alarm Kurulmuştur`
        setTimeout(() => {
            document.querySelector(".uyarı").innerHTML = "";
          }, "5000")
        document.querySelector(".saat").readOnly = true;
        document.querySelector(".dakika").readOnly = true;
        if(zaman == alarm){
            ses.play();
            console.log(ses.scr);
        }
    }

    if(document.querySelector(".saat").value == "" || document.querySelector(".dakika").value == ""){
        document.querySelector(".uyarı").innerHTML = `<div >Geçerli bir zaman giriniz</div>`
    }
    
    
})
buton2.addEventListener("click", ()=>{
    document.querySelector(".saat").readOnly = false;
        document.querySelector(".dakika").readOnly = false;

})
}



setInterval(function(){getTime();},1000); //kodumuzu hangi sıklıkla çalıştıracağımızı yazar setInterval




