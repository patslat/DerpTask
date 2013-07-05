DropTask.Models.Group = Backbone.RelationalModel.extend({
  relations: [{
    type: Backbone.HasMany,
    key: "tasks",
    relatedModel: "DropTask.Models.Task",
    collectionType: "DropTask.Collections.Tasks",
    reverseRelation: {
      key: "group",
      includeInJSON: "id"
    }
  }]
});
