var date0 = document.lastModified;
var month = date0.slice(0,2);
var date = ""
switch(true) {
    case (month=="01"):
        date="January"
        break;
    case (month=="02"):
        date="February"
        break;
    case (month=="03"):
        date="March"
        break;		
    case (month=="04"):
        date="April"
        break;
    case (month=="05"):
        date="May"
        break;
    case (month=="06"):
        date="June"
        break;
    case (month=="07"):
        date="July"
        break;
    case (month=="08"):
        date="August"
        break;
    case (month=="09"):
        date="September"
        break;
    case (month=="10"):
        date="October"
        break;
    case (month=="11"):
        date="November"
        break;		
    case (month=="12"):
        date="December"
        break;
	default:
        break;
}
date = date+" "+date0.slice(3,5)+", "+date0.slice(6,10)
document.getElementById("date").innerHTML = date;