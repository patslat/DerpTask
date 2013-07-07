DropTask.Views.TaskView = Backbone.View.extend({

  initialize: function () {
    this.listenTo(this.model, "change", this.render)
  },

  template: JST['tasks/show'],

  events: {
    "click button#close-sidebar": "hide",
    "click .title": "editTitle",
    "change .edit-select": "editSelect"
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

  editSelect: function (event) {
    var attribute = $(event.target).attr("id")
    var newVal = $(event.target).val();
    this.model.set(attribute, newVal);
    this.model.save();
  }

});