import * as flsFunctions from "./modules/functions.js";

flsFunctions.isWebp();

// import Swiper, { Navigation, Pagination } from 'swiper';

//  import 'swiper/css';

// const swiper = new Swiper('');


$(function () {

	$('.top-slider__inner').slick({
		dots: true,
		arrows: false,
		fade: true,
		autoplay: true,
		autoplaySpead: 2000
	});
	$(".star").rateYo({
		starWidth: "17px",
		normalFill: "#ccccce",
		ratedFill: "#ffc35b",
		readOnly: true
	});
});