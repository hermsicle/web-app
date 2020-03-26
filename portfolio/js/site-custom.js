	$(window).load(function() {	
		'use strict';
		
		$("#pageloader").delay(1200).fadeOut("slow");
		$(".loader-item").delay(700).fadeOut();
	});
	
	/* ==============================================
	Custom Javascript
	=============================================== */
	$(document).ready(function() {
	    'use strict';
		
		jQuery('.panel-heading a').click(function() {
			$('.panel-heading').removeClass('actives');
			$(this).parents('.panel-heading').addClass('actives');
		});
		
		//Shrink Header
	    $(function() {
	        var shrinkHeader = 130;
	        $(window).scroll(function() {
	            var scroll = getCurrentScroll();
	            if (scroll >= shrinkHeader) {
	                $('header').addClass('colored');
	            } else {
	                $('header').removeClass('colored');
	            }
	        });

	        function getCurrentScroll() {
	            return window.pageYOffset || document.documentElement.scrollTop;
	        }
	    });
		
		$("html").niceScroll({
			cursorwidth:"13px",
			cursorborder:"none",
			cursorborderradius:"0",
			zindex:"100000"
		});
		
		//Mobile Nav
	    $('.navbar-nav a').click(function() {
	        $('.navbar-collapse').removeClass('in').addClass("collapse");
	    });
		
		/* Tooltip */
		$('a.like-icons, a.comments-icon, .social-icons ul li a, .demo-button a').tooltip({
			placement: 'top',
			animation:true,
			delay: { show: 200, hide: 100 }
		});
		
		//Shrink Header
	    $(function() {
	        var shrinkHeader = 200;
	        $(window).scroll(function() {
	            var scroll = getCurrentScroll();
	            if (scroll >= shrinkHeader) {
	                $('.navbar ').addClass('colored');
	            } else {
	                $('.navbar').removeClass('colored');
	            }
	        });

	        function getCurrentScroll() {
	            return window.pageYOffset || document.documentElement.scrollTop;
	        }
	    });

		
		$("#menu-toggle").click(function(e) {
			e.preventDefault();
			$("#wrapper").toggleClass("toggled");
		});
		
		$('.navbar-nav').onePageNav({
			currentClass: 'active',
			changeHash: false,
			scrollSpeed: 750
		});
		
		// Parallax Background
	    $.stellar({
	        responsive: true,
	        horizontalScrolling: false,
	        verticalOffset: 40
	    });
		
		$('.skillbar').appear();
			$('.skillbar').on('appear', function () {			
			$(this).find('.skillbar-bar').animate({
				width: $(this).attr('data-percent')
			}, 3000);			
		});
		
		// Flickr Photostream
		$('#basicuse').jflickrfeed({
	        limit: 12,
	        qstrings: {
	            id: '52617155@N08'
	        },
	        itemTemplate: '<li><a href="{{image_b}}"><img src="{{image_s}}" alt="{{title}}" /></a></li>'
	    });
		
		/* Conter */
		$('.counter').counterUp({
            delay: 10,
            time: 1000
        });

		// Piecharts
	    jQuery('#pie-charts').waypoint(function(direction) {
	        jQuery('.chart').easyPieChart({
	            barColor: "#59585b",
	            onStep: function(from, to, percent) {
	                jQuery(this.el).find('.percent').text(Math.round(percent));
	            }
	        });
	    }, {
	        offset: function() {
	            return jQuery.waypoints('viewportHeight') - jQuery(this).height() + 200;
	        }
	    });
		
		$('#hobbie-slider').owlCarousel({
			center: false,
			items:2,
			loop:true,
			margin:30,
			nav:true,
			dots:false,
			navText: ['&#xf104;', '&#xf105'],
			responsive:{
				600:{
					items:4,
				},
				1000:{
					items:4,
				},
				1600:{
					items:6,
				}
			}
		});
		$('#recognitions-slider').owlCarousel({
			center: false,
			items:1,
			loop:true,
			margin:30,
			nav:false,
			dots:true,
			navText: ['&#xf104;', '&#xf105']
		});
		$('#testmonial-slider').owlCarousel({
			center: false,
			items:1,
			loop:true,
			autoplay:true,
			autoplayHoverPause:true,
			margin:30,
			nav:true,
			dots:true,
			navText: ['&#xf104;', '&#xf105']
		});
		
		(function($, window, document, undefined) {
		'use strict';
	
			// init cubeportfolio
			$('#grid-container').cubeportfolio({
				filters: '#filters-container',
				loadMore: '#loadMore-container',
				loadMoreAction: 'click',
				layoutMode: 'grid',
				mediaQueries: [{
					width: 1100,
					cols: 3
				}, {
					width: 800,
					cols: 3
				}, {
					width: 500,
					cols: 2
				}, {
					width: 320,
					cols: 1
				}],
				defaultFilter: '*',
				animationType: 'rotateSides',
				gapHorizontal: 0,
				gapVertical: 0,
				gridAdjustment: 'responsive',
				caption: 'minimal',
				displayType: 'sequentially',
				displayTypeSpeed: 100,
		
				// lightbox
				lightboxDelegate: '.cbp-lightbox',
				lightboxGallery: true,
				lightboxTitleSrc: 'data-title',
				lightboxCounter: '<div class="cbp-popup-lightbox-counter">{{current}} of {{total}}</div>',
		
				// singlePageInline
				singlePageInlineDelegate: '.cbp-singlePageInline',
				singlePageInlinePosition: 'below',
				singlePageInlineInFocus: true,
				singlePageInlineCallback: function(url, element) {
					// to update singlePageInline content use the following method: this.updateSinglePageInline(yourContent)
					var t = this;
		
					$.ajax({
							url: url,
							type: 'GET',
							dataType: 'html',
							timeout: 10000
						})
						.done(function(result) {
		
							t.updateSinglePageInline(result);
		
						})
						.fail(function() {
							t.updateSinglePageInline('AJAX Error! Please refresh the page!');
						});
				},
			});
	
		})(jQuery, window, document);

		// Google Map
		$("#map_extended").gMap({
	        markers: [{
	            address: "",
	            html: '<h4>Office</h4>' +
	                '<address>' +
	                '<div>' +
	                '<div><b>Address:</b></div>' +
	                '<div>Envato Pty Ltd, 13/2<br> Elizabeth St Melbourne VIC 3000,<br> Australia</div>' +
	                '</div>' +
	                '<div>' +
	                '<div><b>Phone:</b></div>' +
	                '<div>+1 (408) 786 - 5117</div>' +
	                '</div>' +
	                '<div>' +
	                '<div><b>Fax:</b></div>' +
	                '<div>+1 (408) 786 - 5227</div>' +
	                '</div>' +
	                '<div>' +
	                '<div><b>Email:</b></div>' +
	                '<div><a href="mailto:info@mithiliya.com">info@info@mithiliya.com</a></div>' +
	                '</div>' +
	                '</address>',
	            latitude: -33.87695388579145,
	            longitude: 151.22183918952942,
	            icon: {
	                image: "images/pin.png",
	                iconsize: [35, 48],
	                iconanchor: [17, 48]
	            }
	        }, ],
	        icon: {
	            image: "images/pin.png",
	            iconsize: [35, 48],
	            iconanchor: [17, 48]
	        },
	        latitude: -33.87695388579145,
	        longitude: 151.22183918952942,
	        zoom: 16
	    });

		
		// Contact Form
		jQuery("#contact_form").validate({
	        meta: "validate",
	        submitHandler: function(form) {

	            var s_name = $("#name").val();
	            var s_lastname = $("#lastname").val();
	            var s_email = $("#email").val();
	            var s_phone = $("#phone").val();
	            var s_suject = $("#subject").val();
	            var s_comment = $("#comment").val();
	            $.post("contact.php", {
	                    name: s_name,
	                    lastname: s_lastname,
	                    email: s_email,
	                    phone: s_phone,
	                    subject: s_suject,
	                    comment: s_comment
	                },
	                function(result) {
	                    $('#sucessmessage').append(result);
	                });
	            $('#contact_form').hide();
	            return false;
	        },
	        /* */
	        rules: {
	            name: "required",

	            lastname: "required",
	            // simple rule, converted to {required:true}
	            email: { // compound rule
	                required: true,
	                email: true
	            },
	            phone: {
	                required: true,
	            },
	            comment: {
	                required: true
	            },
	            subject: {
	                required: true
	            }
	        },
	        messages: {
	            name: "Please enter your name.",
	            lastname: "Please enter your last name.",
	            email: {
	                required: "Please enter email.",
	                email: "Please enter valid email"
	            },
	            phone: "Please enter a phone.",
	            subject: "Please enter a subject.",
	            comment: "Please enter a comment."
	        },
	    }); /*========================================*/
		
	});