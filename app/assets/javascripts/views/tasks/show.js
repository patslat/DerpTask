DropTask.Views.TaskView = Backbone.View.extend({

  template: JST['tasks/show'],

  events: {
    "click button#close-sidebar": "hide",
  },

  hide: function () {
    $("#sidebar").animate({ "right": "-300px" }, "slow")
  },


  render: function () {
    this.$el.html(JST['tasks/show']({ model: this.model }));
    return this;
  }
})