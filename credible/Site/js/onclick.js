function clickButton() {
	var e_id=$("#username").val();
	var pass=$("#password").val();
	$.post("https://stageservices.crediblebh.com/bitcamp/api/account/mobilelogin",
		{Password : pass, UserName : e_id, Domain : "BITCAMP", ApplicationId : "com.crediblebh.care"},
		function checkRequest(data, status) {
			//console.log("Status: " + status)
			//console.log("Data: " + JSON.stringify(data))
			if (data.LoginStatus != 1) {
				alert("Invalid Username and/or Password")
			} else {
				var myCookie = "ID=" + data.EmployeeId + "; expires=0; path=/"
				console.log(myCookie)
				document.cookie = myCookie;
				console.log("myCookie: " + document.cookie)
				document.location.href = "template-main.html"
			}
		},
		"json")
}

