    const heroSection = document.querySelector(".section-hero");






// Creating responsive navbar

const mobile_nav = document.querySelector(".mobile-navbar-btn");
const headerElem = document.querySelector(".header");

mobile_nav.addEventListener("click", () => {
	headerElem.classList.toggle("active");
});














// Sticky navbar component

const observer = new IntersectionObserver((entries) => {
	const ent = entries[0];
	console.log(ent);
	!ent.isIntersecting
	? document.body.classList.add("sticky")
	: document.body.classList.remove("sticky");
},
{
	root: null,
	threshold: 0,
});

observer.observe(heroSection);












// Creating a portfolio tabbed component

const p_btns = document.querySelector(".p-btns");
const p_btn = document.querySelectorAll(".p-btn");
const p_img_elem = document.querySelectorAll(".img-overlay");

p_btns.addEventListener('click', (e) => {
	const p_btn_clicked = e.target;
	console.log(p_btn_clicked);

 p_btn.forEach((curElem) => curElem.classList.remove("p-btn-active"));
 
 p_btn_clicked.classList.add("p-btn-active");



// to find the number in data attr

const btn_num = p_btn_clicked.dataset.btnNum;
console.log(btn_num);

const img_active = document.querySelectorAll(`.p-btn--${btn_num}`);

p_img_elem.forEach((curElem) => curElem.classList.add("p-img-not-active"));

img_active.forEach((curElem) => 
	curElem.classList.remove("p-img-not-active")
); 

});



// Animate number


const workSection = document.querySelector(".section-counter");
const workObserver = new IntersectionObserver((entries, observer) => {

	const [entry] = entries;
	console.log(entry);

	// if(entry.isIntersecting = false) return;
	if(!entry.isIntersecting) return;

	const counterNum = document.querySelectorAll(".counter-numbers");

const speed = 15;

counterNum.forEach((curElem) => {
	const updateNumber = () => {
		const targetNumber = parseInt(curElem.dataset.number);
		// console.log(targetNumber);

		const initialNum = parseInt(curElem.innerText);
		// console.log(initialNum);
		
		const incrementNumber = Math.trunc(targetNumber / speed);
		// console.log(incrementNumber);

		if (initialNum < targetNumber) {
			curElem.innerText = `${initialNum + incrementNumber}%`;
			setTimeout(updateNumber, 300);
		}
	};	

	updateNumber();
});


observer.unobserve(workSection);
},
{
	root: null,
	threshold: 0,
});

workObserver.observe(workSection);







// Testimonial Slider

      new Swiper(".mySwiper", {
        slidesPerView: 2,
        spaceBetween: 60,
        autoplay: {
        	delay: 2500,
        	disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });

      const myJsmedia = (widthSize) => {
      	if (widthSize.matches) {
      		new Swiper(".mySwiper", {
        		slidesPerView: 1,
       	 		spaceBetween: 60,
      		});	
      	}
      	else 
      		{
      		new Swiper(".mySwiper", {
        		slidesPerView: 2,
       	 		spaceBetween: 60,
      			});			
      		}
      };


      const widthSize = window.matchMedia("(max-width: 800px)");

      
      myJsmedia(widthSize);

     
      widthSize.addEventListener("change", myJsmedia);




      // Scroll to top buttom

      const footerElem = document.querySelector(".section-footer");

      const scrollElement = document.createElement("div");
      scrollElement.classList.add("scrollTop-style");

      scrollElement.innerHTML = `<ion-icon name="arrow-up" class="scroll-top"></ion-icon>`;

      footerElem.after(scrollElement);


      scrollElement.after(scrollElement);


      const scrollTop = () => {
      	heroSection.scrollIntoView({behavior: "smooth"});
      };

      scrollElement.addEventListener("click", scrollTop);



   


