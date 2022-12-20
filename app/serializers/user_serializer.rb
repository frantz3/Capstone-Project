class UserSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :username, :email, :user_workouts

def user_workouts

  new_workouts = []
  self.object.workouts.each do |w|
    new_hash = {}
    found = new_workouts.find {|nw| nw[w.name]}
    if found
  
  found[w.name].push(w.exercise)
else 
  

    new_hash[w.name] = [w.exercise]
    new_workouts.push(new_hash)
 
end

    
 
  end
  new_workouts.sort_by {|hash| hash.keys[0].downcase}
end
end
 