DropTask.Views.ProjectsIndex = Backbone.View.extend({

  initialize: function () {
    var self = this;
    ["add", "change", "remove"].forEach(function(event) {
      self.listenTo(self.collection, event, self.render);
    });
  },

  template: JST['projects/index'],

  render: function () {
    var self = this;

    this.$el.html(this.template);

    this.collection.each(function(project) {
      var projectView = new DropTask.Views.ProjectView({ model: project })
      self.$(".projects.content").append(projectView.render().$el);
    });

    return this;
  },

});
