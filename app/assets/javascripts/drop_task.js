window.DropTask = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    var projects = new DropTask.Collections.Projects(data.projects)
  }
};

$(document).ready(function(){
  DropTask.initialize();
});
