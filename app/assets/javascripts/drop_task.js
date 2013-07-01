window.DropTask = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},

  initialize: function ($rootEl, $sidebar, data) {
    var projects = new DropTask.Collections.Projects(data.projects)
    this.installSidebar($sidebar, projects)

    new DropTask.Routers.Projects($rootEl, projects)

    Backbone.history.start();

  },

  installSidebar: function ($sidebar, projects) {
    var that = this;
    var projectsView = new DropTask.Views.ProjectsIndex({
      collection: projects
    });

    $sidebar.html(projectsView.render().$el);
  }
};