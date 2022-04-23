var a=new Array();
a[0]="lisa";
a[1]="Jack";
a[2]="cara";
a[3]="jin";
a[4]="charlie";
a[5]="jacob";
for(var i=0;i<a.length;i++){
	if(a[i].charAt(0)==='J'||a[i].charAt(0)==='j'){
		console.log("goodbye "+a[i])
	}
	else{
		console.log("hello "+a[i])
	}
}