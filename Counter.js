function counter(d,h,m,s) {
 var date = new Date();
 var matchdate = Date(d,h,m,s);
 
 var presenttime = date.getTime();
 var matchtime = matchdate.getTime();
  
 var rtime = matchtime - presenttime ;
 var s1 =  Math.floor(rtime/1000);
 var m1 =  Math.floor(s1/60);
 var h1 =  Math.floor(h1/60);
 var d1 =  Math.floor(h1/24);
 
 document.getElementById("days").innerHTML = d1 + "d:";
 document.getElementById("days").innerHTML = d1 + "d:";
 document.getElementById("days").innerHTML = d1 + "d:";
 document.getElementById("days").innerHTML = d1 + "d:";
