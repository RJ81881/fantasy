 function counter() {
 var date = new Date();
 var matchdate = Date(d,h,m,s);
 
 var presenttime = date.getTime();
 var matchtime = matchdate.getTime();
  
 var rtime = matchtime - presenttime ;
 var s1 =  Math.floor(rtime/1000);
 var m1 =  Math.floor(s1/60);
 var h1 =  Math.floor(h1/60);
 var d1 =  Math.floor(h1/24);
 
 h1 %= 24;
 m1 %= 60;
 s1 %= 60;
 
 h1 = (h1<10)? "0"+h1 : h1;
 m1 = (m1<10)? "0"+m1 : m1;
 s1 = (s1<10)? "0"+s1 : s1;
 
 document.getElementById("days").innerHTML = d1 + "d:";
 document.getElementById("hours").innerHTML = h1 + "h:";
 document.getElementById("minutes").innerHTML = m1 + "m:";
 document.getElementById("seconds").innerHTML = s1 + "s:";
 
 setTimeout(counter,1000);
 }
