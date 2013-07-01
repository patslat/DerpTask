DropTask.Views.GroupView = Backbone.View.extend({

  render: function () {
    this.$el.html(JST["groups/show"]({ model: this.model }));

    var tasks = this.model.tasks
    var tasksView = new DropTask.Views.TasksIndex({
      collection: tasks
    });

    this.$(".group").append(tasksView.render().$el);

    return this;
  }
})