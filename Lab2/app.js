var a,b,c;
 a = prompt("Nhap a");
 b = prompt("Nhap b");
 c = prompt ("Nhap c");
 
 if(a==0){
     var x = -c/b;
     document.write(x);
 }else if(a!=0){
     var delta = (b*b) - 4*a*c;
 }