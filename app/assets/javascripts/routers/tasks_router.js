DropTask.Routers.Tasks = Backbone.Router.extend({
  initialize: function ($sidebar, tasks) {
    this.$sidebar = $sidebar;
    this.tasks = tasks;
  },

  routes: {
    "tasks/:id": "show"
  },

  show: function (id) {
    var task = this.tasks.get(id);
    var taskView = new DropTask.Views.TaskView({ model:task })
    this.$sidebar.html(taskView.render().$el)
    $(this.$sidebar).animate({ "right": "0px" }, "slow")
  },

});
