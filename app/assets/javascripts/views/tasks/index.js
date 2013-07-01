DropTask.Views.TasksIndex = Backbone.View.extend({

  template: JST['tasks/index'],

  render: function () {
    var self = this;

    this.$el.html(this.template());
    this.collection.each(function(task) {
      var taskView = new DropTask.Views.TaskView({ model: task });
      self.$(".tasks-view").append(taskView.render().$el)
    });
    return this;
  }

});
