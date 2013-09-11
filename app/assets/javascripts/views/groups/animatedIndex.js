DropTask.Views.GroupsAnimatedIndex = Backbone.View.extend({

  initialize: function () {
    this.listenTo(this.collection, "add", this.render)
    this.listenTo(this.model.getTasks(), "add", this.render)
    this.listenTo(this.model.getTasks(), "change", this.render)
  },

  template: JST["groups/animatedIndex"],

  events: {
    "click #taskShow": "taskShow",
    "click #submit-new-collaborator": "createCollaborator"
  },

  render: function () {
    var self = this;
    var content = this.template({
      model: this.model,
      collection: this.collection
    });

    this.$el.html(content);


    var h = 900,
        w = 900;

    svg = d3.select(this.el)
      .append("svg:svg")
      .attr("class", "group-view-content")
      .attr("height", h)
      .attr("width", w);

    groups = this.collection.map(function (group) {
      var radius = 100;
      return {
        radius: radius,
        x: Math.random() * (w - radius) + radius,
        y: Math.random() * (h - radius) + radius
      }
    });

    circle = svg.selectAll(".circle").data(groups)

    circle.enter()
      .append("circle")
      .attr("class", "group-circle")
      .attr("r", function (d) { return d.radius })
      .attr("x", function (d) { return d.x })
      .attr("y", function (d) { return d.y });

//
//    var $sidebar = $('<div id="sidebar">');
//    this.$el.prepend($sidebar);
//
//    $(this.$el.find("#group-view-content")).droppable({
//      helper: ".group-circle-helper",
//      accept: ".group-pile",
//      drop: function (event, ui) {
//        event.preventDefault();
//        self.$el.find("#newgroup")
//          .modal("toggle")
//          .on("click", "#submit-new-group", function(event) {
//            var name = self.$("input[name=group\\[name\\]]").val();
//            var group = self.collection.create({
//              name: name,
//              project_id: self.model.id,
//              top: ui.position.top,
//              left: ui.position.left
//            },
//            {
//              wait: true
//            });
//          });
//      }
//    });
//
//    $(this.$el.find(".group-pile"))
//      .draggable({
//        appendTo: "#group-view-content",
//        helper: function () {
//          return $('<div class="group-circle-helper"></div>');
//        },
//        revert: "invalid"
//      });
//
//    $(this.$el.find(".task-pile"))
//      .draggable({
//        appendTo: "#group-view-content",
//        revert: "invalid",
//        helper: function () {
//          return $('<div class="task-circle-helper"></div>');
//        },
//
//      });
//
//    $(this.$el.find(".group-circle"))
//      .css("position", "absolute")
//      .draggable({
//        stop: function (event, ui) {
//          var groupId = $(event.target).attr("data-id");
//          var group = self.collection.get(groupId);
//          group.set("top", ui.position.top);
//          group.set("left", ui.position.left);
//          group.save();
//        }
//      })
//      .droppable({
//        greedy: true,
//        accept: ".task-circle, .task-pile",
//        drop: function (event, ui) {
//
//          var $groupCircle = $(this);
//          var groupId = $(this).attr("data-id");
//          var group = self.collection.get(groupId);
//
//          group.get("tasks").on("add", function (event) {
//            self.render();
//          });
//
//          if ($(ui.draggable).attr("id") === "task-pile"){
//            event.preventDefault();
//            self.$el.find("#newtask")
//              .modal("toggle")
//              .on("click", "#submit-new-task", function (event) {
//                var taskForm =
//                  $(self.$el.find("#new-task-form")).serializeJSON();
//
//                taskForm.task.group_id = group.id;
//                group.get("tasks").create(taskForm.task, {wait: true});
//
//              })
//          }
//          else {
//            var taskId = $(ui.draggable).attr("data-id");
//
//            var task = group.get("project").getTasks().get(taskId);
//
//            var oldGroup = self.collection.get(task.get("group_id"));
//
//            var $oldDivPos = $(ui.draggable).parent().position();
//            var $newDivPos = $(this).position();
//
//            var positionRelOld = ui.helper.position();
//
//            var newTop =
//              positionRelOld.top + $oldDivPos.top - $newDivPos.top;
//            var newLeft =
//              positionRelOld.left + $oldDivPos.left - $newDivPos.left;
//
//            task.set("top", newTop);
//            task.set("left", newLeft);
//
//
//            if ( ! ($(this).has(ui.draggable).length > 0)) {
//
//              var $taskDiv = $(ui.draggable).detach();
//              $(this).append($taskDiv);
//
//              $taskDiv.css({
//                top: task.get("top"),
//                left: task.get("left")
//              })
//
//              task.set("group", group)
//              task.set("group_id", group.id)
//            }
//            // all of these may not be necessary
//            group.save();
//            oldGroup.save();
//            task.save();
//          }
//
//      }
//    });
//
//    $(this.$el.find(".task-circle"))
//      .draggable({
//        revert: "invalid"
//      })
//      .css({
//        position: "absolute"
//      });
//
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
  },

  createCollaborator: function (event) {
    event.preventDefault()
    var form = $(this.$el.find("#collaborator-form")).serializeJSON();
    $.ajax({
      url: "/projects/" + this.model.id + "/collaborations" +
        "?&authenticity_token=" + AUTH_TOKEN,
      type: "POST",
      data: form,
    })
  }
})
