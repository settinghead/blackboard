Meteor.publish("allAlumni", function () {
	return Meteor.users.find();
});