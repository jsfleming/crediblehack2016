jQuery.easing.def = "easeOutQuad";

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
			if(!isSchedulePage)
			{
				isSchedulePage = true;
				isMainPage = false;
				isProfilePage = false;

				$("#schedulePage").attr("class", "currentPage");
				$("#mainPage").removeClass("currentPage");
				$("#profilePage").removeClass("currentPage");

				$("#map").fadeOut(500);
				$("#main").fadeOut(500, function()
				{
					$("#schedule").fadeIn(500);
				});
			}
		});

	$("#goToProfile").click(function()
		{
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
	
	$("#profilePage").click(function()
		{
			if(!isProfilePage)
			{
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
		});

	$("#schedulePage").click(function()
		{
			if(!isSchedulePage)
			{
				isSchedulePage = true;
				isMainPage = false;
				isProfilePage = false;

				$("#schedulePage").attr("class", "currentPage");
				$("#mainPage").removeClass("currentPage");
				$("#profilePage").removeClass("currentPage");

				$("#map").fadeOut(500);
				$("#main").fadeOut(500, function()
				{
					$("#schedule").fadeIn(500);
				});
			}
		});
	

	// Make Work page current page
	$("#mainPage").attr("class", "currentPage");
	
	// Hide Schedule page
	$("#map").fadeOut(0);

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

	$(".projectThumbnail").click(function(e) {
		
	});
	
	$(".closeButton, #schedulePage, #logo").click(function() {
		
		// Add a delay to fix weird issue with resizing About page
		function closeSlider() {
			closeOpenedProject(currOpenProject.find(".thumbnailImage"));
			currOpenProject.find(".projectThumbnailHover").css("visibility", "visible");
		}
		//setTimeout(closeSlider, 400);
		setTimeout(closeSlider, 1);
		
	});
	
});