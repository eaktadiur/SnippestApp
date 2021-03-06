Template.menu.events({
	'click .addInterest': function(e, tmp){
		e.preventDefault();
		Session.set('adding_interest', true);
		console.log('add button click');
	}
})

Template.article.events({
	'click .like':function(evt,tmp){
		var curlike = Likes.findOne({muser:Meteor.userId(),article:tmp.data._id});
		if(!curlike){
			Likes.insert({muser:Meteor.userId(),article:tmp.data._id});				
		} 
		Session.set('updated',new Date());
	}
})

Template.addform.events({
	'click .save': function(e, tmp){
		var description = tmp.find('.description').value;
		var name = tmp.find('.name').value;
		var url = tmp.find('.url').value;
		var height = getRandomInt(150,350);
		Articles.insert({description:description,name:name,src:url,height:height,width:'25%', create_at: new Date()});
		Session.set('adding_interest',false);

		console.log('Save button click');

	},
	'click .close': function(){
		Session.set('adding_interest', false);
		console.log('close button click');
	},
	'click .cancel': function(){
		Session.set('adding_interest', false);
		console.log('cancel button click');
	}
})

function getRandomInt (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}