// Server code

Meteor.startup(function () {
    // code to run on server at startup
});

// maxFieldsSize : 2 * 1024 * 1024; to change max fileupload size. Default 2mb
// Formidable has information on config options
Meteor.Router.configure({
  bodyParser: {
    uploadDir: 'uploads',
    hash: 'sha1',
    keepExtensions : true
  }
});

// Server side endpoint.  Posting a file
Meteor.Router.add('/upload/file', 'POST', function(){
    var title = this.request.body.fileTitle,
        size = this.request.files.fileInfo.size,
        path = this.request.files.fileInfo.path,
        name = this.request.files.fileInfo.name,
        obj = {title: title, size: size, path: path, name: name};
    
    Files.insert(obj);
    // redirect to root
    return [301, {Location: '/'}, ""]
  } 
);

Meteor.publish('files', function () {
    return Files.find();
});