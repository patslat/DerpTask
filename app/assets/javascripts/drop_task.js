window.DropTask = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},

  initialize: function ($rootEl, $menu, $sidebar, data) {
    var projects = new DropTask.Collections.Projects(data.projects)
    var tasks = new DropTask.Collections.Tasks(data.tasks)
    this.installMenu($menu, projects)

    new DropTask.Routers.Projects($rootEl, $sidebar, projects, tasks)
    Backbone.history.start();
  },

  installMenu: function ($menu, projects) {
    var that = this;
    var projectsView = new DropTask.Views.ProjectsIndex({
      collection: projects
    });

    $menu.html(projectsView.render().$el);
  }
};