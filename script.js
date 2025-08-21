// add classes for mobile navigation toggling
    var CSbody = document.querySelector("body");
    const CSnavbarMenu = document.querySelector("#cs-navigation");
    const CShamburgerMenu = document.querySelector("#cs-navigation .cs-toggle");

    CShamburgerMenu.addEventListener('click', function() {
        CShamburgerMenu.classList.toggle("cs-active");
        CSnavbarMenu.classList.toggle("cs-active");
        CSbody.classList.toggle("cs-open");
        // run the function to check the aria-expanded value
        ariaExpanded();
    });

    // checks the value of aria expanded on the cs-ul and changes it accordingly whether it is expanded or not 
    function ariaExpanded() {
        const csUL = document.querySelector('#cs-expanded');
        const csExpanded = csUL.getAttribute('aria-expanded');

        if (csExpanded === 'false') {
            csUL.setAttribute('aria-expanded', 'true');
        } else {
            csUL.setAttribute('aria-expanded', 'false');
        }
    }

        // This script adds a class to the body after scrolling 100px
    // and we used these body.scroll styles to create some on scroll 
    // animations with the navbar
    
    document.addEventListener('scroll', (e) => { 
        const scroll = document.documentElement.scrollTop;
        if(scroll >= 100){
    document.querySelector('body').classList.add('scroll')
        } else {
        document.querySelector('body').classList.remove('scroll')
        }
    });


    // mobile nav toggle code
    const dropDowns = Array.from(document.querySelectorAll('#cs-navigation .cs-dropdown'));
        for (const item of dropDowns) {
            const onClick = () => {
            item.classList.toggle('cs-active')
        }
        item.addEventListener('click', onClick)
        }
                                


// FAQ toggle
const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        if (answer.style.display === 'block') {
            answer.style.display = 'none';
        } else {
            answer.style.display = 'block';
        }
    });
});


// Hero background dots
const canvas = document.getElementById('hero-bg');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let dots = [];
for (let i = 0; i < 500; i++) {
  dots.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 3 + 1,
    dx: (Math.random() - 0.5) * 0.8,
    dy: (Math.random() - 0.5) * 0.8
  });
}

function drawDots() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#ff6b35";
  dots.forEach(dot => {
    ctx.beginPath();
    ctx.arc(dot.x, dot.y, dot.r, 0, Math.PI * 2);
    ctx.fill();
    dot.x += dot.dx;
    dot.y += dot.dy;
    if (dot.x < 0 || dot.x > canvas.width) dot.dx *= -1;
    if (dot.y < 0 || dot.y > canvas.height) dot.dy *= -1;
  });
  requestAnimationFrame(drawDots);
}
drawDots();

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

// Timeline switching
const dayButtons = document.querySelectorAll('.day');
const eventLists = document.querySelectorAll('.event-list');

dayButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    dayButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    eventLists.forEach(list => list.classList.add('hidden'));
    document.getElementById(`day-${btn.dataset.day}`).classList.remove('hidden');
  });
});

class CS_GalleryFilter {
	filtersSelector = '.cs-button';
	galleriesSelector = '.cs-gallery';
	activeClass = 'cs-active';
	hiddenClass = 'cs-hidden';

	constructor() {
		this.$galleries = document.querySelectorAll(this.galleriesSelector);
		const $filters = document.querySelectorAll(this.filtersSelector);

		this.onClick($filters[0]);

		for (const $filter of $filters) {
			$filter.addEventListener('click', () => this.onClick($filter));
		}
	}

	onClick($filter) {
		this.filter($filter.dataset.filter);

		const { activeClass } = this;

		this.$activeFilter?.classList.remove(activeClass);
		$filter.classList.add(activeClass);

		this.$activeFilter = $filter;
	}

	filter(filter) {
		const showAll = filter == 'all';
		const { hiddenClass } = this;

		for (const $gallery of this.$galleries) {
			const show = showAll || $gallery.dataset.category == filter;
			$gallery.classList.toggle(hiddenClass, !show);
		}
	}
}

new CS_GalleryFilter();
                                

const faqItems = Array.from(document.querySelectorAll('.cs-faq-item'));
        for (const item of faqItems) {
            const onClick = () => {
            item.classList.toggle('active')
        }
        item.addEventListener('click', onClick)
        }

        class FAQFilter {
        filtersSelector = '.cs-option'
        FAQselector = '.cs-faq-group'
        activeClass = 'cs-active'
        hiddenClass = 'cs-hidden'

        constructor() {
            const $filters = document.querySelectorAll(this.filtersSelector)
            this.$activeFilter = $filters[0]
            this.$images = document.querySelectorAll(this.FAQselector)

            this.$activeFilter.classList.add(this.activeClass)

            for (const $filter of $filters) {
            $filter.addEventListener('click', () => this.onClick($filter))
            }
        }

        onClick($filter) {
            this.filter($filter.dataset.filter)

            const { activeClass } = this

            this.$activeFilter.classList.remove(activeClass)
            $filter.classList.add(activeClass)

            this.$activeFilter = $filter
        }

        filter(filter) {
            const showAll = filter == 'all'
            const { hiddenClass } = this

            for (const $image of this.$images) {
            const show = showAll || $image.dataset.category == filter
            $image.classList.toggle(hiddenClass, !show)
            }
        }
        }

        new FAQFilter()
                                
