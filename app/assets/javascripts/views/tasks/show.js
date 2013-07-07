DropTask.Views.TaskView = Backbone.View.extend({

  initialize: function () {
    this.listenTo(this.model, "change", this.render)
  },

  template: JST['tasks/show'],

  events: {
    "click button#close-sidebar": "hide",
    "click .title": "editTitle",
    "change #priority": "editPriority"
  },

  hide: function () {
    $("#sidebar").animate({ "right": "-300px" }, "slow")
  },

  render: function () {
    var content = this.template({
      model: this.model
    })
    this.$el.html(content);
    return this;
  },

  editTitle: function (event) {
    var self = this;
    var originalText = $(event.target).text();
    var titleForm = '<input type="text" id="title-edit" value="' +
      originalText + '">';

    $(event.target).html(titleForm).on("focusout", function (event) {
      var newTitle = $(event.target).val();
      if (newTitle === "") {
        newTitle = originalText;
      }
      self.model.set("title", newTitle);
      self.model.save();
    });
  },

  editPriority: function (event) {
    var priority = $(event.target).val();
    this.model.set("priority", priority);
    this.model.save();
  }

});