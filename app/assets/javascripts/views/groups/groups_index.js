DropTask.Views.GroupsIndex = Backbone.View.extend({

  initialize: function () {
    var self = this;
    ["add", "change", "remove"].forEach(function(event) {
      self.listenTo(self.collection, event, self.render);
    });
  },

  template: JST['groups/index'],

  events: {
    "click #submit-new-group": "create"
  },

  render: function () {
    var self = this;
    this.$el.html(this.template({ model: this.model }));
    this.collection.each(function(group) {
      var groupView = new DropTask.Views.GroupView({ model: group });
      self.$(".groups-view").append(groupView.render().$el);
    });

    return this;
  },

  create: function (event) {
    event.preventDefault();
    var name = this.$("input[name=group\\[name\\]]").val();
    this.collection.create({
      name: name,
      project_id: this.model.id
    });

  }

});
