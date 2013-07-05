DropTask.Views.GroupsAnimatedIndex = Backbone.View.extend({
  initialize: function (groups, tasks) {
    this.groups = groups;
    this.tasks = tasks;
  },

  template: JST["groups/animatedIndex"],

  render: function () {
    var self = this;

    var content = this.template({
      groups: this.groups
    })

    this.$el.html(content)

    $(this.$el.find(".group-circle"))
      .draggable({
        stop: function (event, ui) {
          var groupId = $(event.target).attr("data-id");
          var group = self.groups.get(groupId);
          group.set("top", ui.position.top);
          group.set("left", ui.position.left);
          group.save();
        }
      })
      .droppable({
        greedy: true,
        accept: ".task-circle",
        drop: function (event, ui) {
          var groupId = $(this).attr("data-id");
          var taskId = ui.draggable.attr("data-id");

          var group = self.groups.get(groupId);
          var task = self.tasks.get(taskId);
          var oldGroup = self.groups.get(task.get("group_id"));

          var $oldDivPos = $(ui.draggable).parent().position()
          var $newDivPos = $(this).position()

          var positionRelOld = ui.helper.position()

          var newTop = positionRelOld.top + $oldDivPos.top - $newDivPos.top
          var newLeft = positionRelOld.left + $oldDivPos.left - $newDivPos.left

          task.set("top", newTop)
          task.set("left", newLeft)


          if ( ! ($(this).has(ui.draggable).length > 0)) {

            var $taskDiv = $(ui.draggable).detach();
            $(this).append($taskDiv);

            $taskDiv.css({
              top: task.get("top"),
              left: task.get("left")
            })
            group.tasks.add(task);
            task.set("group_id", group.id);
          }

          group.save();
          task.save();
      }
    });

    $(this.$el.find(".task-circle"))
      .draggable({
        revert: "invalid",
        refreshPositions: true,
        connectToSortable: ".group-circle"
      })
      .css({
        position: "absolute"
      });

    return this;
  }

})