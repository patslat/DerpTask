DropTask.Views.TasksIndex = Backbone.View.extend({

  template: JST['tasks/index'],

  priorityTemplate: JST['tasks/priority'],

  dueDateTemplate: JST['tasks/dueDate'],

  events: {
    "click #taskShow": "taskShow",
  },

  render: function () {
    var self = this;

    this.$el.html(this.template({ collection: this.collection }));

    var $sidebar = $('<div id="sidebar">');
    this.$el.prepend($sidebar);

    return this;
  },

  priorityRender: function () {
    var tasks = this.collection

    this.$el.html(
      this.priorityTemplate({
        collection: tasks
      })
    )
    var $sidebar = $('<div id="sidebar">');
    this.$el.prepend($sidebar);

    this.listenTo(this.collection, "change", this.priorityRender)

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


  taskShow: function (event) {
    event.preventDefault();
    var taskId = $(event.target).attr("data-id");
    var task = this.collection.get(taskId);

    var content = new DropTask.Views.TaskView({model: task});
    $("#sidebar").html(content.render().$el).animate(
      { "right": "0px" },
      "slow"
    );
  }

});
