



var app = angular.module('myPortfolio', []);

app.controller('portfolio', ['$scope', function($scope){

	$scope.passion = [
	{
		icon:'ion-compose ',
		title:'Passion',
		description:'I am passionate about big ideas that improve personal experiences and interactions online. The web is a gateway to the world where information is shared that has the power to change lives. One online experience, one online interaction at a time.'

	},
	{
		icon:'ion-folder ',
		title:'Programming',
		description:'My natural knack for languages combined with my love for technology led me to programming. I am proficient JavaScript, Object Oriented, Algorithm Scripting, jQuery, jQuery UI languages, JSON APIs, Ajax, HTML5, CSS3, SASS, Mobile First Design (Responsive Layout) and Twitter Bootstrap.'
	},
	{
		icon:'ion-cube ',
		title:'Bio',
		description:"Born and raised in Haiti, I am a permanent resident of the US. I 've learned just how valuable the web can be in education, and I have worked with programs that provide internet access and computer lessons to the poor. The future in technology is promising if we grow and share our knowledge."
	}
	];

	$scope.list = [
	{
		education:'Interactivity with Javascript (University of Michigan)',
		language:'HTML5',
		icon:'ion-social-html5-outline'
		// description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere delectus esse ratione officiis. Numquam'
	},
	
	{
		education:'Web Development (Johns Hopkins University)',
		language:'CSS3',
		icon:'ion-social-css3'
		// description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere delectus esse ratione officiis. Numquam'
	},

	{
		education:'Free Code Camp Front End Development',
		language:'SASS',
		icon:'ion-social-sass '
		// description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere delectus esse ratione officiis. Numquam'
	},

	{
		education:'Codecademy Javascript',
		language:'JavaScript',
		icon:'ion-social-javascript'
		// description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere delectus esse ratione officiis. Numquam'
	},

	{
		education:'Code School',
		language:'AngularJS',
		icon:'ion-social-angular'
		// description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere delectus esse ratione officiis. Numquam'
	},

	{
		education:'Search Engine Optimization Fundamentals(University of California, Davis)',
		language:'ReactJS',
		icon:'ion-ios-color-filter-outline'
		// description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere delectus esse ratione officiis. Numquam'

		
	}
	];




	$scope.effect = [
	{
		title:'Wikipedia App',
		description:'Users can search Wikipedia entries and pull the results related to their search. A button can also be clicked to see a random Wikipedia entry.',
		picture: 'http://i50.photobucket.com/albums/f306/esterlinaccime/FullSizeRender%203_zpsv5oeed6x.jpg',
		link:'page',
		likes:879,
		links:'http://codepen.io/accimeesterlin/full/rrwWNp/'
	},

		{
		title:'Weather App',
		description:'Users can view the weather in their current location, anywhere in the world. The app displays a different icon depending on the weather. Users can toggle between Fahrenheit and Celsius.',
		picture:'http://i50.photobucket.com/albums/f306/esterlinaccime/FullSizeRender%204_zpsja7wnemn.jpg',
		link:'page',
		likes:997,
		links:'http://codepen.io/accimeesterlin/full/BzbLoE/'
	},


	{
		title:'Book Pricing Single Webpage',
		description:"I built this webpage as an example of my angularJS skillset. It shows the price and 'likes and dislikes' for books",
		picture:'http://i50.photobucket.com/albums/f306/esterlinaccime/FullSizeRender%206_zpsclvnrpfo.jpg',
		link:'page',
		likes:948,
		links:'http://codepen.io/accimeesterlin/full/pEQLZp/'
	},
	{
		title:'Twitch App',
		description:'Users can see if the Free Code Camp Channel is currently live streaming on Twitch.tv. The status output can be clicked on to go directly to the live stream and to see additional details.',
		picture:'http://i50.photobucket.com/albums/f306/esterlinaccime/FullSizeRender%205_zpsgulmgejn.jpg',
		link:'page',
		likes:698,
		links:'http://codepen.io/accimeesterlin/full/gwWxka/'
	}
	];


	// $scope.contact = [
	// {
	// 	name:'Name',
	// 	content: 'Esterling Accime'
	// },

	// {
	// 	name:'Company',
	// 	content: 'Translate Haiti'
	// },

	// {
	// 	name:'Address',
	// 	content: '9700 Medlock'
	// },


	// {
	// 	name:'Phone',
	// 	content: '404-825-3444'
	// },

	// {
	// 	name:'Email',
	// 	content: 'accimeesterlin@yahoo.com'
	// }
	// ];

}]);

































