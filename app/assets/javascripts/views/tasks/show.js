DropTask.Views.TaskView = Backbone.View.extend({

  template: JST['tasks/show'],

  render: function () {
    this.$el.html(JST['tasks/show']({ model: this.model }));
    return this;
  }
})