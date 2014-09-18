Template.pinterest.adding_interest = function () {
	return Session.get('adding_interest');
}

Template.pinterest.articles = function(){
	var search = {};
	return Articles.find(search, {limit: 10});
}

