function printData(){
	var url = "https://stageservices.crediblebh.com/bitcamp/api/account/mobilelogin"
	var data = httpGet(url);

	var securityToken = data.SecurityToken;
	console.log(data);
	
	data = getEmployee(securityToken);
	console.log(data);

}

function httpGet(theUrl){
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "POST", theUrl, false ); // false for synchronous request
    
    var user = JSON.stringify({
    	"Password": "6eb151338030ac420e4cbcd4ff8ac28f",
		"UserName": "sbrin",
		"Domain": "BITCAMP",
		"ApplicationId": "com.crediblebh.care"
	});
    
    xmlHttp.setRequestHeader("Content-Type", "application/json");
    xmlHttp.send(user);
    return JSON.parse(xmlHttp.responseText);
}

function getEmployee(token){
	var url = "https://stageservices.crediblebh.com/bitcamp/api/employees/detailList";
	var xmlHttp = new XMLHttpRequest();
	xmlHttp.open("POST", url,false);

	var employeeList = JSON.stringify("EmployeeIdList: [1,2]");
	xmlHttp.setRequestHeader("Content-Type", "application/json");
	xmlHttp.setRequestHeader("Authorization", "Bearer " + token);
	xmlHttp.send(employeeList);
	return JSON.parse(xmlHttp.responseText);
}