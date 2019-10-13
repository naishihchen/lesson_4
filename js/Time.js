function getTime() {
    var date = new Date();
    
    var year = date.getFullYear();

    var month = ("0" + (date.getMonth() + 1)).slice(-2);

    var day = ("0" + date.getDate()).slice(-2);
    
    var hour = ("0" + date.getHours()).slice(-2);

    var minute = ("0" + date.getMinutes()).slice(-2);

    var second = ("0" + date.getSeconds()).slice(-2);

    var date_string = month + "-" + day + "-" + year + " " + hour + ":" + minute + ":" + second;
    
    //alert(date_string);
    
    document.getElementById("year").innerHTML = year;
    
    document.getElementById("fullDate").innerHTML = date_string;
}