Template.pinterest.adding_interest = function () {
	return Session.get('adding_interest');
}

Template.pinterest.articles = function(){
	var search = {};
	return Articles.find(search, {limit: 10});
}

Template.pinterest.rendered = function(){
	setTimeout(function(){
		masonize(function(){
		});
		
	},1000)
	$('.search-query input').focus();
	
}

Template.article.numlikes = function(){
	return Likes.find({article:this._id}).count();
}
Template.article.likethis = function(){
	var curlike = Likes.findOne({muser:Meteor.userId(),article:this._id});
	if(curlike)
	return "You Like This"
}

function masonize(callback){
	var $container = $('#mainContainer');
	// initialize
	$container.masonry({
	  itemSelector: '.item',
	  gutter:20
	});
	var msnry = $container.data('masonry');
	if(callback){callback()};
}

