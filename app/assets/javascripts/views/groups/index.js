DropTask.Views.GroupsIndex = Backbone.View.extend({

  template: JST['groups/index'],

  render: function () {
    var self = this;
    this.$el.html(this.template);
    this.collection.each(function(group) {
      var groupView = new DropTask.Views.GroupView({ model: group });
      self.$(".groups-view").append(groupView.render().$el);
    });

    return this;
  }


});
