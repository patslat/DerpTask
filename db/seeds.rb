# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.create(:username => 'patslat', :email => 'slattery714@gmail.com', :password => 123)

User.create(:username => 'annakazaam', :email => 'slattery714@gmail.com', :password => 123)
User.create(:username => 'socrates', :email => 'slattery714@gmail.com', :password => 123)
User.create(:username => 'plato', :email => 'slattery714@gmail.com', :password => 123)
User.create(:username => 'nietzsche', :email => 'slattery714@gmail.com', :password => 123)

Project.create(:name => "World Domination", :creator_id => 1)

Group.create(:name => "Clone Droptask", :project_id => 1, :creator_id => 1)
Group.create(:name => "Do fun stuff", :project_id => 1, :creator_id => 1)
Group.create(:name => "Run around!", :project_id => 1, :creator_id => 1)


Task.create(:title => "Set up API", :status => "In Progress", :priority => "Very High", :effort => "Small", :description => "Set up rails API first", :group_id => 1, :creator_id => 1)

Task.create(:title => "Set up Backbone Relations", :status => "In Progress", :priority => "Very High", :effort => "Small", :description => "They should produce collections and models based on what your API gives you", :group_id => 1, :creator_id => 1)

Task.create(:title => "Make it work on a single page", :status => "In Progress", :priority => "Very High", :effort => "Small", :description => "No refreshing allowed here!", :group_id => 1, :creator_id => 1)

Task.create(:title => "Allow users to drag stuff around!", :status => "In Progress", :priority => "Very High", :effort => "Small", :description => "Better figure out how to do this", :group_id => 2, :creator_id => 1)

Task.create(:title => "Make it look better", :status => "In Progress", :priority => "Very High", :effort => "Small", :description => "Bootstrap the shit out of this thing", :group_id => 2, :creator_id => 1)

Task.create(:title => "Go to the gym, fatty", :status => "In Progress", :priority => "Very High", :effort => "Small", :description => "Stop being lazy", :group_id => 3, :creator_id => 1)

Task.create(:title => "Break things", :status => "In Progress", :priority => "Very High", :effort => "Small", :description => "Follows by necessity from running around", :group_id => 3, :creator_id => 1)