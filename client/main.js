
// Client Stuff

Meteor.Router.add({
    '/': "listFiles",
    '/add': "addFile"
}); 

Template.listFiles.helpers({
  list: function () {
    return Files.find({});  
  }
});

Template.listFiles.events({
  'click #addFileBtn' : function(e) {
    e.preventDefault();
    Meteor.Router.to('/add');
  } 
});

Template.addFile.events({
  
  'click #cancelBtn': function(e){
    e.preventDefault();
    Meteor.Router.to('/');
  }

});

Meteor.subscribe("files");

