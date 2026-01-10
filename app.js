function clock(){
 var time1=document.getElementById('time')
 var amPm1=document.getElementById('timeAmPm')

 var date=new Date();
 var hour=date.getHours();
 var mun=date.getMinutes();
 var sd=date.getSeconds()

 var amPm='A.M.' 
 if(hour>=12){
   amPm='P.M.'
 }

 hour=hour % 12;
 if(hour==0){
   hour=12;
 }

 if(hour<10){
   hour='0'+hour;
 }
 if(mun<10){
   mun='0'+mun;
 }
 if(sd<10){
   sd='0'+sd;
 }

time1.innerText=hour+':'+mun+':'+sd;
amPm1.innerText=amPm;
}

setInterval(clock,1000);
clock();