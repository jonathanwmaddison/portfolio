
$(document).ready(function(){
	$(".supplements").toggle()
    $(".my-nav>.container-fluid>a").click(function(){
		if(!$(this).hasClass('active')){
			$(".my-nav>.container-fluid>a").toggleClass("active")
			$(".core-resume, .supplements").toggle()
		}
	 });
});

