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

Task.create(:title => "Set up API", :status => "In Progress", :priority => "Very High", :effort => "Small", :description => "Set up rails API first", :group_id => 1, :creator_id => 1)