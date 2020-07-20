$(document).ready(function() {
	$('.tab-explanation').eq(0).show()
	$('.tab-explanation').eq(0).addClass('active')

	$('.navbar-toggle').click(function() {
		$('.navbar-collapse').slideToggle()
	})
	$('.navbar-collapse li').click(function() {
		$('.navbar-collapse').slideUp()
	})

	// Feature tabs
	$('.tab').click(function() {
		index = $('.tab').index(this)
		$('.tab-explanation.active').fadeOut(400, function() {
			$(this).removeClass('active')
			$('.tab-explanation').eq(index).fadeIn(400)
			$('.tab-explanation').eq(index).addClass('active')
			$('.tab.active').removeClass('active')
			$('.tab').eq(index).addClass('active')
		})
	})

})