DropTask.Views.ProjectsIndex = Backbone.View.extend({

  initialize: function () {
    var self = this;
    ["add", "change", "remove"].forEach(function(event) {
      self.listenTo(self.collection, event, self.render);
    });
  },

  template: JST['projects/index'],

  events: {
    "click #submit-new-project": "create"
  },

  render: function () {
    var self = this;

    this.$el.html(this.template);

    this.collection.each(function(project) {
      var projectView = new DropTask.Views.ProjectView({ model: project })
      self.$(".projects.content").append(projectView.render().$el);
      self.$(".projects.content").append($("<br>"));
    });

    return this;
  },

  create: function (event) {
    event.preventDefault();
    var name = this.$("input[name=project\\[name\\]]").val();
    this.collection.create({ name: name });

  }

});
