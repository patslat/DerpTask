DropTask.Views.TasksIndex = Backbone.View.extend({

  template: JST['tasks/index'],

  priorityTemplate: JST['tasks/priority'],

  dueDateTemplate: JST['tasks/dueDate'],

  render: function () {
    var self = this;

    this.$el.html(this.template({ collection: this.collection }));
    return this;
  },

  priorityRender: function () {
    var tasks = this.collection
    // sort here
    this.$el.html(
      this.priorityTemplate({
        collection: tasks
      })
    )
    return this;
  },
  // TODO due date
  // dueDateRender: function () {
  //   var tasks = this.collection
  //   //sort here
  //   this.$el.html(
  //     this.dueDateTemplate({
  //       collection: tasks
  //     })
  //   )
  //   return this;
  // }

});
