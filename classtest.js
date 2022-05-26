var stuff1={
    name:"삼다수",
    maker:"광동",
    due_data:Date(),
    price:600,

    put_data:function(){
        return this.name+'<br>'+this.maker+'<br>'+this.due_data+'<br>'+this.price+'<br>';
    }
}
var stuff2={
    name:"백산수",
    maker:"황동",
    due_data:Date(),
    price:500,

    put_data:function(){
        return this.name+'<br>'+this.maker+'<br>'+this.due_data+'<br>'+this.price+'<br>';
    }
}

var arr=new Array();

arr[0]=stuff1;
arr[1]=stuff2;

function put_All(){
    var result="";
    for(var i=0;i<arr.length;i++){
        result+=arr[i].put_data();
    }
    return result;
}