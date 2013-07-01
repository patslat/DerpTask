DropTask.Routers.Projects = Backbone.Router.extend({
  initialize: function ($rootEl, projects) {
    this.$rootEl = $rootEl;
    this.projects = projects;
  },

  routes: {
    "projects/:id": "show"
  },

  show: function (id) {
    console.log(this.projects.get(id).get("groups"))
    var groupsView = new DropTask.Views.GroupsIndex({
      collection: this.projects.get(id).get("groups") // not a collection yet
    });

    this.$rootEl.html(groupsView.render().$el)
  }

});
