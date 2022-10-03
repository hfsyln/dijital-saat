let ses = document.querySelector("audio");
let buton = document.querySelector(".buton");
let buton2 = document.querySelector(".buton2");
let butonactv = false;


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
 

    let alarm = `${document.querySelector(".saat").value}:${document.querySelector(".dakika").value}`
    


console.log(buton)

buton.addEventListener("click", ()=> {
    console.log(   "buton cilick")
    console.log(buton.textContent)
    

   
        if(document.querySelector(".saat").value && document.querySelector(".dakika").value && !butonactv) {
            document.querySelector(".uyarı").innerHTML = `Alarm Kurulmuştur`
            buton.textContent = "Stop"
            buton.style.backgroundColor = "green"
            
            setTimeout(() => {
                document.querySelector(".uyarı").innerHTML = "";
            }, "5000")
            document.querySelector(".saat").readOnly = true;
            document.querySelector(".dakika").readOnly = true;
            if(zaman == alarm){
                ses.play();
                console.log(ses.scr);
            }
            butonactv = true
            console.log(butonactv)
        }else if(document.querySelector(".saat").value == "" || document.querySelector(".dakika").value == ""){
            document.querySelector(".uyarı").innerHTML = `<div >Geçerli bir zaman giriniz</div>`
            console.log(butonactv)
        }else if(butonactv){
            document.querySelector(".uyarı").innerHTML = `<div >Alarm İptal Edilmiştir</div>`
            setTimeout(() => {
                document.querySelector(".uyarı").innerHTML = "";
            }, "5000")
            document.querySelector(".saat").readOnly = false;
            document.querySelector(".dakika").readOnly = false;
            buton.textContent = "Active"
            buton.style.backgroundColor = "coral"
            butonactv = false
            console.log(butonactv)
        }
        console.log(butonactv)
      

})


buton2.addEventListener("click", ()=>{
    document.querySelector(".saat").readOnly = false;
    document.querySelector(".dakika").readOnly = false;
    document.querySelector(".saat").value = " "
    document.querySelector(".dakika").value = " "

})
}



setInterval(function(){getTime();},1000); //kodumuzu hangi sıklıkla çalıştıracağımızı yazar setInterval




