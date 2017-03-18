








function projects(titl, cl, mess, link){
	// Creating elements
	var box = $("<div>"),
		img = $("<img>"), info = $("<div>"),
		description = $("<p>"), title = $("<h2>"),
		links = $("<a>");

	// Adding values to the created elements
	title.html(titl);

	description.html(mess);

	img.attr('src', '#');

	info.addClass("info");

	info.append(title, description, "<a href='" + link+ "'> " + link + "</a>" );

	box.append(img, info);
	box.addClass(cl);




	$(".porfolio").append(box);

}

// Message for every project
var message = [
	'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident quam ducimus minus. Quas iusto, temporibus culpa consequuntur consequatur rem doloremque earum tempora expedita praesentium. Incidunt architecto, excepturi eligendi! Optio, dolorem.',
	'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque maxime minus, quaerat, velit harum magni voluptas, voluptatem amet error asperiores quod. Soluta quis quasi magni sunt saepe beatae ratione officiis.',
	'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis illum, eveniet. Omnis assumenda nam soluta temporibus incidunt laboriosam ex reiciendis, ducimus voluptate rerum suscipit, quisquam aperiam magni, porro quidem tenetur.',
	'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat nulla earum libero id optio, consectetur. Nobis pariatur, amet quam. Quod, architecto alias quisquam delectus placeat hic officia neque numquam debitis!'
];

var title = ['Esterling', 'Accime', 'Moving', 'Sadrack'],
	links = ['https://tranquil-chamber-85783.herokuapp.com/', 
			'https://pacific-depths-18375.herokuapp.com/', 
			'https://thawing-forest-62868.herokuapp.com/', 
			'https://still-stream-95337.herokuapp.com/'];

var targetedClass = ['first', 'second', 'third', 'fourth'];
for (var i = 0; i < 4; i++) {
	console.log(i);

	if(i === 1 || i === 3){
		projects(title[i], 'box ' + targetedClass[i], message[i], links[i]);
	}

	else{
		projects(title[i], 'box ' + targetedClass[i], message[i], links[i]);
	}

	
}



// Adding pictures
function addImage(){
	$('.first img').attr('src', '../images/nyyork.png');
	$('.second img').attr('src', '../images/trivia.png');
	$('.third img').attr('src', '../images/walkingdead.png');
	$('.fourth img').attr('src', '../images/crystal1.png');
}


addImage();































