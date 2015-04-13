AppController = RouteController.extend({
  layoutTemplate: 'appLayout',
  onBeforeAction: function(pause) {
    if (this.url === '/' ||
      this.url === '/coding-group/' ||
      this.url === '/coding-group' ||
      this.url === '/signUp' ||
      this.url === '/signIn' ||
      this.url === '/alumni/everyone') {
      this.next();
    } else {
      if (Meteor.user() === null) {
        Router.go('signIn');
      }
      this.next();
    }
  }
});
