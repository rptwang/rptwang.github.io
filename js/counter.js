function overlay()
{
    var cookieValue = document.getElementById("counter_fake").innerHTML;
    s = cookieValue.substr(cookieValue.length - 8);
    num = s.replace( /\D+/g, '');;
    l = num.length;
    for (i = 0; i < 6-l; i++) { 
    	num = "0"+num;
    }
    document.getElementById("counter").innerHTML=num;
}

overlay();