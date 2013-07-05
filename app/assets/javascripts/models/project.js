DropTask.Models.Project = Backbone.RelationalModel.extend({
  relations: [
  {
    type: Backbone.HasMany,
    key: "groups",
    relatedModel: "DropTask.Models.Group",
    collectionType: "DropTask.Collections.Groups",
    reverseRelation: {
      key: "project",
      includeInJSOn: "id"
    }
  }],

  getTasks: function () {
    var tasks = new DropTask.Collections.Tasks()
    var groups = this.get("groups");
    groups.each(function (group) {
      var groupTasks = group.get("tasks").toJSON()
      tasks.add(groupTasks);
    })
    return tasks;
  }

});
