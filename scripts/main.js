const lyConts = document.querySelectorAll(".ly_cont");
console.log(lyConts);
const cb = function (entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      console.log("入った！");
      // observer.unobserve(entry.target);
      entry.target.classList.add("inview");
    } else {
      console.log("出た！");
      entry.target.classList.remove("inview");
    }
  });

  // console.log(entries);
  // console.log('Intersection')
};

const options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.5,
};

const io = new IntersectionObserver(cb, options);
lyConts.forEach((lyCont) => io.observe(lyCont));

// heroHeadingのアニメーション

TweenMax.set(".char", {
  x: "-500px",
  opacity: "0",
  rotation: "-45",
});

TweenMax.set(".el_arrow", {
  opacity: "0",
});

const arrowAnimate = () => {
  TweenMax.to(".el_arrow", 0.5, {
    rotation: "360",
    opacity: "1",
  });
};

const stagger = () => {
  TweenMax.staggerTo(
    ".char",
    0.5,
    {
      opacity: "1",
      x: 0,
      rotation: 0,
      // onComplete: arrowAnimate
    },
    0.2
  );
};

TweenMax.set(".textAnimate", {
  opacity: "0",
	y:"50"
});

const textAnimate = () => {
	TweenMax.to(".textAnimate", 1, {
    opacity: "1",
		y:"0"
  });
};

const hamburgerAnimate=()=>{
	TweenMax.to(".hamburger",5,{
		rotation:"360",
		repeat: -1,
		yoyo: true
	})
}

const headerNav = document.getElementById('header-nav');
const btnHamburger = document.getElementById('hamburger');

hamburger.addEventListener('click',function(){
	headerNav.classList.toggle('open');
})


setTimeout(stagger, 1000);
setTimeout(arrowAnimate, 2500);
setTimeout(textAnimate, 3500);
setTimeout(hamburgerAnimate, 3500);


//　実績ブロックのモーダルウィンドウの動作

// DOM設定
const techmeets 	= document.querySelector('#techmeets');
const studyLink01 = document.querySelector('#study-link01');
const studyLink02 = document.querySelector('#study-link02');
const bochi 			= document.querySelector('#bochi');
const ytu 				= document.querySelector('#ytu');

const worksArray = document.querySelectorAll('.bl_work');
const overLay 		= document.querySelector('#over-lay');

// モーダル開く
const addModalToTechmeets = () => {
	techmeets.classList.add('modal');
	overLay.classList.remove('hidden');
}
techmeets.addEventListener('click', addModalToTechmeets);

const addModalToStudyLink01 = () => {
	studyLink01.classList.add('modal');
	overLay.classList.remove('hidden');
}
studyLink01.addEventListener('click', addModalToStudyLink01);

const addModalToStudyLink02 = () => {
	studyLink02.classList.add('modal');
	overLay.classList.remove('hidden');
}
studyLink02.addEventListener('click', addModalToStudyLink02);

const addModalToBochi = () => {
	bochi.classList.add('modal');
	overLay.classList.remove('hidden');
}
bochi.addEventListener('click', addModalToBochi);

const addModalToYtu = () => {
	ytu.classList.add('modal');
	overLay.classList.remove('hidden');
}
ytu.addEventListener('click', addModalToYtu);


// モーダル閉じる
const closeModal = () => {
	console.log('start');
	console.log(worksArray);
	worksArray.forEach((work)=>{
		console.log(work)
		if(work.classList.contains('modal')){
			console.log(work.classList.contains('modal'))
			work.classList.remove('modal');
		}
	})
	overLay.classList.add('hidden');
}

overLay.addEventListener('click', closeModal)
