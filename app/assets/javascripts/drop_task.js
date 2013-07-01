window.DropTask = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function ($content, $sidebar, data) {
    var projects = new DropTask.Collections.Projects(data.projects)
    this.installSidebar($sidebar, projects)

  },

  installSidebar: function ($sidebar, projects) {
    var that = this;
    var projectsView = new DropTask.Views.ProjectsIndex({
      collection: projects
    });

    $sidebar.html(projectsView.render().$el);
  }
};