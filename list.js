function call(){
    var xhttp=new XMLHttpRequest();
    xhttp.onreadystatechange=function(){
        if(this.readyState==4&&this.status==200){
            var response=JSON.parse(this.responseText);
            var list1=response.list;
            var output="";
            for(var i=0;i<list1.length;i++){
                output +="<tr>";
                output += "<th>"+list1[i].no+"</th>";
                output += "<th>"+list1[i].item+"</th>";
                output += "<th>"+list1[i].quantity+"</th>";
                output += "</tr>";
            }
            document.getElementById("demo").innerHTML=output; 
            console.log(output);
        }
    
    }

xhttp.open("GET","list.json",true);
xhttp.send();
}