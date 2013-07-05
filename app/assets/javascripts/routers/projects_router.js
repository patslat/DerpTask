DropTask.Routers.Projects = Backbone.Router.extend({
  initialize: function ($rootEl,projects) {
    this.$rootEl = $rootEl;
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
      model: project
    });
    this.$rootEl.html(groupsView.render().$el);
  },

  allTasks: function (sort) {
    var sortedView = new DropTask.Views.TasksIndex({
      collection: this.projects.allTasks()
    });

    if (sort === "priority") {
      this.$rootEl.html(sortedView.priorityRender().$el);
    } else {
      // this.$rootEl.html(sortedView.dueDateRender().$el)
    }
  },

  groupsAnimatedView: function (id) {
    var project = this.projects.get(id);
    var groups = project.get("groups");
    var groupsAnimatedView = new DropTask.Views.GroupsAnimatedIndex({
      model: project,
      collection: groups
    });

    this.$rootEl.html(groupsAnimatedView.render().$el);
  }
});
