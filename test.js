let user_info=new Array();

function signup_process(){
    let temp=new signup_temp;
    temp.set_All(document.getElementById('name_val').value,
        document.getElementById('id_val').value,
        document.getElementById('pw_val').value,
        document.getElementById('mail_val').value,
        document.getElementById('phone_val').value,
        document.getElementById('address_val').value);

        user_info[user_info.length]=temp;

        return false;
}

function get_user_info(){
    return (user_info.length-1)+'번째 회원정보를 출력합니다<br>'+
        user_info[user_info.length-1].name+'<br>'+
        user_info[user_info.length-1].id+'<br>'+
        user_info[user_info.length-1].pw+'<br>'+
        user_info[user_info.length-1].mail+'<br>'+
        user_info[user_info.length-1].phone+'<br>'+
        user_info[user_info.length-1].address;
}
function get_Nth_user_info(){
    var n=document.getElementById('nn').value;
    return ((n)+'번째 회원정보를 출력합니다<br>'+
        user_info[n].name+'<br>'+
        user_info[n].id+'<br>'+
        user_info[n].pw+'<br>'+
        user_info[n].mail+'<br>'+
        user_info[n].phone+'<br>'+
        user_info[n].address);
}

function signup_temp(name, id, pw, mail, phone, address){
    this.name=name;
    this.id=id;
    this.pw=pw;
    this.mail=mail;
    this.phone=phone;
    this.address=address;

    this.set_All=function(na, id, pw, ma, ph, ad){
        this.name=na;
        this.id=id;
        this.pw=pw;
        this.mail=ma;
        this.phone=ph;
        this.address=ad;
    }
    this.set_name=function(na){
        this.name=na;
    }
    this.set_id=function(id){
        this.id=id;
    }
    this.set_pw=function(pw){
        this.pw=pw;
    }
    this.set_mail=function(ma){
        this.mail=ma;
    }
    this.set_phone=function(ph){
        this.phone=ph;
    }
    this.set_address=function(ad){
        this.address=ad;
    }
    this.get_name=function(){
        return this.name;
    }
    this.get_id=function(){
        return this.id;
    }
    this.get_pw=function(){
        return this.pw;
    }
    this.get_mail=function(){
        return this.mail;
    }
    this.get_phone=function(){
        return this.phone;
    }
    this.get_address=function(){
        return this.address;
    }
}