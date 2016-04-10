jQuery.easing.def = "easeOutQuad";

query_data = {};

$(document).ready(function()
{
	// Make enlarge buttons inactive if no onClick event
	$(".enlargeButton").each(function() {
        if ( $(this).attr("onClick") == undefined )  {
            $(this).addClass("projectNavInactive");
        };
    });
	
		
	// Project thumbnail hover
	$(".projectThumbnail").on("mouseenter", function(e){
		$(this).children(".projectThumbnailHover").fadeIn(300);
		
		$(this).children(".projectThumbnailHover").find("h4").css("display", "block");
		$(this).children(".projectThumbnailHover").find("h4").css("opacity", "0");
		$(this).children(".projectThumbnailHover").find("h4").delay(200).animate({left: '30', opacity: 1}, 200);
		
		$(this).children(".projectThumbnailHover").find("h5").css("display", "block");
		$(this).children(".projectThumbnailHover").find("h5").css("opacity", "0");
		$(this).children(".projectThumbnailHover").find("h5").delay(350).animate({left: '30', opacity: 1}, 200);
	})
	
	$(".projectThumbnail").on("mouseleave", function(e){
		$(this).children(".projectThumbnailHover").fadeOut(200);
		$(this).children(".projectThumbnailHover").find("h4").animate({left: '0', opacity: 0}, 0);
		$(this).children(".projectThumbnailHover").find("h5").animate({left: '0', opacity: 0}, 0);
	})
	
	// Hide hover effect on touch devices
	if (Modernizr.touch) {
		$(".projectThumbnailHover").css("display", "none");
		$(".projectThumbnailHover").css("visibility", "hidden");
		$(".projectThumbnail").unbind("mouseenter");
		$(".projectThumbnail").unbind("mouseleave");	
	}
	
	// Page navigation
	var isMainPage = true;
	var isProfilePage = false;
	var isSchedulePage = false;
	
	$("#goToSchedule").click(function()
		{
			openSchedule();
		});

	$("#goToProfile").click(function()
		{
			openProfile();
		});

	$("#mainPage").click(function()
		{
			if(!isMainPage)
			{
				isMainPage = true;
				isProfilePage = false;
				isSchedulePage = false;
				$("#mainPage").attr("class", "currentPage");
				$("#profilePage").removeClass("currentPage");
				$("#schedulePage").removeClass("currentPage");
				
				$("#profile").fadeOut(0);
				$("#schedule").fadeOut(500, function()
				{
					$("#main").fadeIn(500);
				});

			}
		});

	$("#schedulePage").click(function()
		{
			openSchedule();
		});
	
	$("#profilePage").click(function()
		{
			openProfile();
		});



	function openSchedule(){
		
		if(!isSchedulePage)
		{
			isSchedulePage = true;
			isMainPage = false;
			isProfilePage = false;

			$("#schedulePage").attr("class", "currentPage");
			$("#mainPage").removeClass("currentPage");
			$("#profilePage").removeClass("currentPage");

			$("#profile").fadeOut(500);
			$("#main").fadeOut(500, function()
			{
				$("#schedule").fadeIn(500);
			});

			//Create a list
			var numOfClients = "{{employee_numOfSched}}";
			var numOfClients = 2;

			var str = "<ul id='clist'>";

			for (var i = 0; i < numOfClients; i++){
				name = "";
				if (i == 0) {
					name = "Brenton Akane"
				} else {
					name = "Frank Roma"
				}

				str += "<li class='cNum' id ='" + i + "'>";
				str += (i+1) + ". " + name; //Append 
				str += "</li>";
			}

			str += "</ul>"

			$(".ClientList").append(str);

			$(".cNum").click(function(e){
				console.log("asdlkfjasdl");
				var cId = $(this).attr("id");

				if ($("#" + cId).text().indexOf("---------------------------------") > -1){
					var selector = "#" + cId + " .cDesc";
					$(selector).remove();
				}else{
					dob = ""
					address = ""
					city = ""
					state = ""
					if (cId == 0) {
						dob = "2000-12-12T00:00:00"
						address = "6315 5th St NW"
						city = "Washington"
						state = "DC"
					} else {
						dob = "1960-04-04T00:00:00"
						address = "13501 Richter Farm Rd"
						city = "Germantown"
						state = "MD"
					}
					var str = "<div class='cDesc'>";
					str += "---------------------------------";
					str += "<br>Date of Birth: " + dob
					str += "<br>Address: "+ address +", "+ city +", " + state;
					str += "<br>Home Phone: ";
					str += "<br>Email: ";
					str += "<br>---------------------------------</div>"
					$("#" + cId).append(str);
				}
				
			});

		
		}	
	}

	function openProfile(){
		if(!isProfilePage){
			isProfilePage = true;
			isSchedulePage = false;
			isMainPage = false;

			$("#profilePage").attr("class", "currentPage");
			$("#mainPage").removeClass("currentPage");
			$("#schedulePage").removeClass("currentPage");

			$("#schedule").fadeOut(500);
			$("#main").fadeOut(500, function()
			{
				$("#profile").fadeIn(500);
			});
		}
	}


	// Make Work page current page
	$("#mainPage").attr("class", "currentPage");
	
	// Hide Schedule page
	$("#profile").fadeOut(0);

	// Hide Schedule page
	$("#schedule").fadeOut(0);
	
	// For site fade site in
	$(".container").css("display", "none");
	
});

// Remove site preloader after site is loaded
$(window).load(function() {
	$('#sitePreloader').delay(200).fadeOut(500, function() {
		$(this).remove();
	});
	
	// Fade site in
	$(".container").delay(700).fadeIn(500);
});

	// Portfolio slider setup
	jQuery(document).ready(function($) {
		var sliderProps = {
		autoScaleSlider: true,
	   	autoScaleSliderWidth: 460,
	   	autoScaleSliderHeight: 284,
	   	captionShowEffects: '',
	   	controlNavEnabled: false,
	   	keyboardNavEnabled: true,
	   	directionNavEnabled: false,
	   	startSlideIndex: 0,
	   	imageScaleMode: 'fill' },
		openedProjectInfo,
		isAnimating = false,
		currOpenProject;

	function closeOpenedProject(el) {
		openedProjectInfo.slideUp(900);
		openedProjectInfo.parent().find('.portfolioSlider').fadeOut();
		openedProjectInfo = false;
		if(el && el.length) {
			el.css('visibility', 'visible');
		}
	}

	
});