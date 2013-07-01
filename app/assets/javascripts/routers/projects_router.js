DropTask.Routers.Projects = Backbone.Router.extend({
  initialize: function ($rootEl, projects) {
    this.$rootEl = $rootEl;
    this.projects = projects;
  },

  routes: {
    "": "index",
    "projects/:id": "show"
  },

  index: function () {

  },

  show: function (id) {
    var project = this.projects.get(id)
    var groupsView = new DropTask.Views.GroupsIndex({
      collection: project.groups
    });

    this.$rootEl.html(groupsView.render().$el)
  }

});
