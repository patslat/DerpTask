DropTask.Views.GroupsIndex = Backbone.View.extend({

  initialize: function () {
    var self = this;
    ["add", "change", "remove"].forEach(function(e) {
      self.listenTo(self.collection, e, self.render);
    });
  },

  template: JST['groups/index'],

  events: {
    "click #taskShow": "taskShow",
    "click #submit-new-group": "create",
    "submit #collaborator-form": "createCollaborator"
  },

  render: function () {
    var self = this;

    this.$el.html(this.template({ model: this.model }));

    this.model.get("groups").each(function(group) {
      var groupView = new DropTask.Views.GroupView({ model: group });
      self.$("#groups-view").append(groupView.render().$el);
    });

    var $sidebar = $('<div id="sidebar">');
    this.$el.prepend($sidebar);

    return this;
  },

  create: function (event) {
    event.preventDefault();
    var name = this.$("input[name=group\\[name\\]]").val();
    this.model.get("groups").create({
      name: name,
      project_id: this.model.id
    });

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
    event.preventDefault();
    var self = this,
        form = $(this.$el.find("#collaborator-form")).serializeJSON();
    $.ajax({
      url: "/projects/" + this.model.id + "/collaborations",
      type: "POST",
      data: form,
      success: function () {
        self.$("#collaborator-modal").modal('toggle');
      },
      error: function () {
        var $errorDiv = $('<div class="alert" style="width: 100px;">Invalid Email</div>')
          .delay(1000).fadeOut();
        self.$("#collaborator-modal").find('.modal-body')
          .prepend($errorDiv)
      }
    })
  },

});
