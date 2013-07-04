DropTask.Views.GroupView = Backbone.View.extend({

  initialize: function () {
    this.listenTo(this.model.tasks, "change", this.render)
  },

  events: {
    "click #submit-new-task": "createTask"
  },

  render: function () {
    this.$el.html(JST["groups/show"]({ model: this.model }));

    var tasks = this.model.tasks
    var tasksView = new DropTask.Views.TasksIndex({
      collection: tasks
    });

    this.$(".group").append(tasksView.render().$el);

    return this;
  },

  createTask: function (event) {
    var taskForm = $(event.target).parents('#new-task-form').serializeJSON();
    this.model.tasks.create(taskForm);
  }
});