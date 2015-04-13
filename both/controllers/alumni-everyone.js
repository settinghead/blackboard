AlumniEveryoneController = AppController.extend({
	subscriptions: function () {
		return [Meteor.subscribe('allAlumni')];
	},
	data: {
		allAlumni: function () {
			return Meteor.users.find().fetch();
		}
	},
	template: "alumniEveryone"
});