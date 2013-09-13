# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


#  User.create(:username => 'patslat', :email => 'slattery714@gmail.com', :password => 123)
#  User.create(:username => 'annakazaam', :email => 'ak@gmail.com', :password => 123)
#  User.create(:username => 'socrates', :email => 's@gmail.com', :password => 123)
#  User.create(:username => 'plato', :email => 'p@gmail.com', :password => 123)
#  User.create(:username => 'nietzsche', :email => 'n@gmail.com', :password => 123)
#
#  Project.create(:name => "World Domination", :creator_id => 1)
#
#  Project.create(:name => "Anna's Project", :creator_id => 2)
#
#  Group.create(:name => "Clone Droptask", :project_id => 1, :creator_id => 1)
#  Group.create(:name => "Do fun stuff", :project_id => 1, :creator_id => 1)
#  Group.create(:name => "Run around!", :project_id => 1, :creator_id => 1)
#
#  Group.create(:name => "Do Cool Stuff", :project_id => 2, :creator_id => 2)
#  Group.create(:name => "Eat Tomatoes", :project_id => 2, :creator_id => 2)
#  Group.create(:name => "Catch Spiders", :project_id => 2, :creator_id => 2)
#  Group.create(:name => "Be a Neuroscientist", :project_id => 2, :creator_id => 2)
#
#
#  Task.create(:title => "Set up API", :status => "In Progress", :priority => "Very High", :effort => "Small", :description => "Set up rails API first", :group_id => 1, :creator_id => 1, :due_date => "2013-07-13T00:00")
#
#  Task.create(:title => "Set up Backbone Relations", :status => "In Progress", :priority => "Very High", :effort => "Small", :description => "They should produce collections and models based on what your API gives you", :group_id => 1, :creator_id => 1, :due_date => "2013-07-13T00:00")
#
#  Task.create(:title => "Make it work on a single page", :status => "In Progress", :priority => "Very High", :effort => "Small", :description => "No refreshing allowed here!", :group_id => 1, :creator_id => 1, :due_date => "2013-07-13T00:00")
#
#  Task.create(:title => "Allow users to drag stuff around!", :status => "In Progress", :priority => "Very High", :effort => "Small", :description => "Better figure out how to do this", :group_id => 2, :creator_id => 1, :due_date => "2013-07-13T00:00")
#
#  Task.create(:title => "Make it look better", :status => "In Progress", :priority => "Very High", :effort => "Small", :description => "Bootstrap the shit out of this thing", :group_id => 2, :creator_id => 1, :due_date => "2013-07-13T00:00")
#
#  Task.create(:title => "Go to the gym, fatty", :status => "In Progress", :priority => "Very High", :effort => "Small", :description => "Stop being lazy", :group_id => 3, :creator_id => 1, :due_date => "2013-07-13T00:00")
#
#  Task.create(:title => "Break things", :status => "In Progress", :priority => "Very High", :effort => "Small", :description => "Follows by necessity from running around", :group_id => 3, :creator_id => 1, :due_date => "2013-07-13T00:00")
#
#
#  Task.create(:title => "Go to grad school", :status => "In Progress", :priority => "Very High", :effort => "Small", :description => "And learn to brain", :group_id => 4, :creator_id => 2, :due_date => "2013-07-13T00:00")
#  Task.create(:title => "Brains", :status => "In Progress", :priority => "Very High", :effort => "Small", :description => "Study them", :group_id => 5, :creator_id => 2, :due_date => "2013-07-13T00:00")
#  Task.create(:title => "Have a birthday", :status => "In Progress", :priority => "Very High", :effort => "Small", :description => "Really soon!", :group_id => 4, :creator_id => 2, :due_date => "2013-07-13T00:00")
#
#  Collaboration.create(:collaborator_id => 1, :project_id => 2)


User.create(:username => 'demo1', :email => 'demo1@demo.com', :password => 'demo1')
User.create(:username => 'demo2', :email => 'demo2@demo.com', :password => 'demo2')

Project.create(:name => "Chores", :creator_id => 1)
Group.create(:name => "Chores", :project_id => 1, :creator_id => 1)
Task.create(:title => "Wash em", :priority => "High", :status => "In Progress", :effort => "small", :description => "Do it!", :group_id => 1, :creator_id => 1)
Task.create(:title => "Put em away", :priority => "High", :status => "In Progress", :effort => "small", :description => "They're dry, trust me.", :group_id => 1, :creator_id => 1)

