DropTask.Routers.Projects = Backbone.Router.extend({
  initialize: function ($rootEl, $sidebar, projects, tasks) {
    this.$rootEl = $rootEl;
    this.$sidebar = $sidebar
    this.projects = projects;
    this.tasks = tasks;
  },

  routes: {
    "projects/:id/animated": "groupsAnimatedView",
    "projects/:id": "show",
    "all/:sort": "allTasks",
  },

  show: function (id) {
    var project = this.projects.get(id)
    var groupsView = new DropTask.Views.GroupsIndex({
      model: project,
      collection: project.groups
    });
    this.$rootEl.html(groupsView.render().$el)

    // stops from displaying task show without proj index when refreshed
    new DropTask.Routers.Tasks(this.$sidebar, this.tasks)
  },

  allTasks: function (sort) {
    var sortedView = new DropTask.Views.TasksIndex({
      collection: this.tasks
    });

    if (sort === "priority") {
      this.$rootEl.html(sortedView.priorityRender().$el)
      new DropTask.Routers.Tasks(this.$sidebar, this.tasks)
    } else {
      // this.$rootEl.html(sortedView.dueDateRender().$el)
    }
  },

  groupsAnimatedView: function (id) {
    var project = this.projects.get(id)
    var groupsAnimatedView = new DropTask.Views.GroupsAnimatedIndex(
      project.groups,
      this.tasks
    )

    this.$rootEl.html(groupsAnimatedView.render().$el)
  }

});
