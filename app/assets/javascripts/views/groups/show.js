DropTask.Views.GroupView = Backbone.View.extend({

  render: function () {
    this.$el.html(JST["groups/show"]({ model: this.model }));
    return this;
  }
})