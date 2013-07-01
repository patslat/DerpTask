DropTask.Models.Project = Backbone.Model.extend({

  initialize: function () {
    this.on("change:groups", this.parseGroups);
    this.parseGroups();
  },

  parseGroups: function () {
    this.groups = new DropTask.Collections.Groups(this.get('groups'));
  }

});
