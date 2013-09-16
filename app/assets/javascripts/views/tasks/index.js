DropTask.Views.TasksIndex = Backbone.View.extend({

  template: JST['tasks/index'],

  taskTemplate: JST['tasks/index'],

  priorityTemplate: JST['tasks/priority'],

  dueDateTemplate: JST['tasks/dueDate'],

  events: {
    "click #taskShow": "taskShow",
  },

  attributes: {
    class: "tasks-index"
  },

  render: function () {
    var self = this;

    this.$el.html(this.template({ collection: this.collection }));

    var $sidebar = $('<div id="sidebar">');
    this.$el.prepend($sidebar);

    return this;
  },

  priorityRender: function () {
    var self = this;

    this.$el.html(
      this.priorityTemplate()
    )

    var $container = this.$el.find(".very-high-priority")
    var tasks = new DropTask.Collections.Tasks(
      this.collection.where({
        priority: "Very High"
      }),
      {
        comparator: function (model1, model2) {
          var order1 = parseFloat(model1.get("order")),
              order2 = parseFloat(model2.get("order"));
          return (order1 >= order2) ? 1 : -1;
        }
      }
    )

    var content = self.template({ collection: tasks });
    $container.append(content);

    $container = this.$el.find(".high-priority")
    tasks = new DropTask.Collections.Tasks(
      this.collection.where({
        priority: "High"
      }),
      {
        comparator: function (model1, model2) {
          var order1 = parseFloat(model1.get("order")),
              order2 = parseFloat(model2.get("order"));
          return (order1 >= order2) ? 1 : -1;
        }
      }

    )
    var content = this.template({ collection: tasks });
    $container.append(content);

    $container = this.$el.find(".none-priority")
    tasks = new DropTask.Collections.Tasks(
      this.collection.where({
        priority: "None"
      }),
      {
        comparator: function (model1, model2) {
          var order1 = parseFloat(model1.get("order")),
              order2 = parseFloat(model2.get("order"));
          return (order1 >= order2) ? 1 : -1;
        }
      }

    )
    var content = this.template({ collection: tasks });
    $container.append(content);

    var $sidebar = $('<div id="sidebar">');
    this.$el.prepend($sidebar);

    this.listenTo(this.collection, "change", this.priorityRender)

    this.$el.find(".tasks-view").sortable({
      connectWith: ".tasks-view",
      update: function (event, ui) {
        var droppedTaskId = ui.item.attr("data-id"),
            droppedTask = self.collection.get(droppedTaskId),
            oldPriority = $(ui.sender).parent().attr("data-priority"),
            newPriority = $(event.target).parent().attr("data-priority"),
            newOrder = (
              (parseFloat(ui.item.prev().attr("data-order")) +
              parseFloat(ui.item.next().attr("data-order"))) / 2.0
            );
        console.log("NEW ORDER IS: " + newOrder);
        if (oldPriority) {
          droppedTask.save(
            { priority: newPriority, order: newOrder },
            { wait: true }
          )
        } else {
          droppedTask.save(
            { order: newOrder },
            { wait: true }
          )
        }
      }
    });

    return this;
  },

  dueDateRender: function () {
    var tasks = this.collection
    this.$el.html(
      this.dueDateTemplate()
    );

    var sortedTasks = new DropTask.Collections.Tasks(
      tasks.sortBy(function(m) {
        var date = new Date(m.get('due_date'))
        return -date.getTime()
      })
    );

    var content = this.template({
      collection: sortedTasks
    });

    console.log(content)

    this.$('.tasks-index').append(content)

    var $sidebar = $('<div id="sidebar">');
    this.$el.prepend($sidebar);

    this.listenTo(this.collection, "change", this.dueDateRender)

    return this;
  },


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
