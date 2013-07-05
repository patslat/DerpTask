DropTask.Views.GroupsAnimatedIndex = Backbone.View.extend({

  template: JST["groups/animatedIndex"],

  events: {
    "click #taskShow": "taskShow"
  },

  render: function () {
    var self = this;

    var content = this.template({
      collection: this.collection
    });

    this.$el.html(content);

    var $sidebar = $('<div id="sidebar">');
    this.$el.append($sidebar);


    $(this.$el.find("#group-view-content")).droppable({
      helper: ".group-circle-helper",
      accept: ".group-circle-helper",
      drop: function (event, ui) {
        self.$el.find("#newgroup")
          .modal("toggle")
          .on("click", "#submit-new-group", function(event) {
            var name = self.$("input[name=group\\[name\\]]").val();
            self.collection.create({
              name: name
              // set project_id!
            });
          })

      }
    });

    $(this.$el.find(".group-pile"))
      .draggable({
        appendTo: "#group-view-content",
        helper: function () {
          return $('<div class="group-circle-helper"></div>');
        },
        revert: "invalid"
      });

    $(this.$el.find(".group-circle"))
      .draggable({
        stop: function (event, ui) {
          var groupId = $(event.target).attr("data-id");
          var group = self.collection.get(groupId);
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
          var taskId = $(ui.draggable).attr("data-id");

          var group = self.collection.get(groupId);

          var task = group.get("project").getTasks().get(taskId);

          var oldGroup = self.collection.get(task.get("group_id"));

          var $oldDivPos = $(ui.draggable).parent().position();
          var $newDivPos = $(this).position();

          var positionRelOld = ui.helper.position();

          var newTop = positionRelOld.top + $oldDivPos.top - $newDivPos.top;
          var newLeft = positionRelOld.left + $oldDivPos.left - $newDivPos.left;

          task.set("top", newTop);
          task.set("left", newLeft);


          if ( ! ($(this).has(ui.draggable).length > 0)) {

            var $taskDiv = $(ui.draggable).detach();
            $(this).append($taskDiv);

            $taskDiv.css({
              top: task.get("top"),
              left: task.get("left")
            })

            task.set("group", group)
            task.set("group_id", group.id)
          }
          // all of these may not be necessary
          group.save();
          oldGroup.save();
          task.save();
      }
    });

    $(this.$el.find(".task-circle"))
      .draggable({
        revert: "invalid",
        connectToSortable: ".group-circle"
      })
      .css({
        position: "absolute"
      });



    return this;
  },

  taskShow: function (event) {
    event.preventDefault();
    var taskId = $(event.target).attr("data-id");
    var task = this.model.getTasks().get(taskId);
    var content = new DropTask.Views.TaskView({model: task});
    $("#sidebar").html(content.render().$el).animate(
      { "right": "0px" },
      "slow"
    );
  }

})