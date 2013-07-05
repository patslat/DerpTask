DropTask.Views.TaskView = Backbone.View.extend({

  template: JST['tasks/show'],

  events: {
    "click button#close-sidebar": "hide",
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
  }
});