DropTask.Routers.Projects = Backbone.Router.extend({
  initialize: function ($rootEl, $sidebar, projects) {
    this.$rootEl = $rootEl;
    this.$sidebar = $sidebar;
    this.projects = projects;
  },

  routes: {
    "projects/:id/animated": "groupsAnimatedView",
    "projects/:id": "show",
    "all/:sort": "allTasks",
  },

  show: function (id) {
    var project = this.projects.get(id);
    var groupsView = new DropTask.Views.GroupsIndex({
      collection: project.get("groups")
    });
    this.$rootEl.html(groupsView.render().$el);

    // stops from displaying task show without proj index when refreshed
    new DropTask.Routers.Tasks(this.$sidebar, project.getTasks());
  },

  allTasks: function (sort) {
    var sortedView = new DropTask.Views.TasksIndex({
      collection: this.projects.allTasks()
    });

    if (sort === "priority") {
      this.$rootEl.html(sortedView.priorityRender().$el);
      new DropTask.Routers.Tasks(this.$sidebar, this.projects.allTasks());
    } else {
      // this.$rootEl.html(sortedView.dueDateRender().$el)
    }
  },

  groupsAnimatedView: function (id) {
    var project = this.projects.get(id);
    var groups = project.get("groups");
    var groupsAnimatedView = new DropTask.Views.GroupsAnimatedIndex({
      collection: groups
    });

    this.$rootEl.html(groupsAnimatedView.render().$el);
    new DropTask.Routers.Tasks(this.$sidebar, project.getTasks());
  }

});
