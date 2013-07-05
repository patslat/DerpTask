DropTask.Collections.Projects = Backbone.Collection.extend({
  url: '/projects',
  model: DropTask.Models.Project,

  allTasks: function () {
    var tasks = new DropTask.Collections.Tasks();

    this.each(function (project) {
      tasks.add(project.getTasks().toJSON());
    })

    return tasks;
  }

});
