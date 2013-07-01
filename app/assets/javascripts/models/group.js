DropTask.Models.Group = Backbone.Model.extend({

  initialize: function () {
    this.on("change:tasks", this.parseTasks);
    this.parseTasks();
  },

  parseTasks: function () {
    this.tasks = new DropTask.Collections.Tasks(this.get('tasks'));
  }
});
