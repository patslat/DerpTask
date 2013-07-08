DropTask.Views.TaskView = Backbone.View.extend({

  initialize: function () {
    this.listenTo(this.model, "change", this.render)
  },

  template: JST['tasks/show'],

  events: {
    "click button#close-sidebar": "hide",
    "click .editable-text": "editText",
    "change .edit-select": "editSelect",
    "blur .editable-date": "editSelect"
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

  editText: function (event) {
    $(event.target).toggleClass("editable-text")
    var self = this;
    var originalText = $(event.target).text();
    var attribute = $(event.target).attr("data-attr");

    if (attribute === "title") {
      var form = '<input type="text" value="' + originalText + '">';
    } else {
      var form = '<textarea>' + originalText + '</textarea>';
    }

    $(event.target).html(form).on("focusout", function (event) {
      var newVal = $(event.target).val();
      if (newVal === "") {
        newVal = originalText || "description";
      }
      self.model.set(attribute, newVal);
      self.model.save();
    });
  },

  editSelect: function (event) {
    var attribute = $(event.target).attr("id")
    var newVal = $(event.target).val();
    this.model.set(attribute, newVal);
    this.model.save();
  },
});