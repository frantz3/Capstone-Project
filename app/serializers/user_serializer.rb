class UserSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :username, :email, :user_workouts
# has_many :workouts
# has_many: exercises, through:
def user_workouts
  # gain access to the instance through self
  # return an array of uniquely named workouts
  new_workouts = []
  self.object.workouts.each do |w|
    new_hash = {}
    found = new_workouts.find {|nw| nw[w.name]}
    if found
  # binding.pry
  found[w.name].push(w.exercise)
else 
  
  # binding.pry
  # if !w.exercise.nil?
    new_hash[w.name] = [w.exercise]
    new_workouts.push(new_hash)
  # end
end

    
    # binding.pry
  end
  new_workouts.sort_by {|hash| hash.keys[0].downcase}
end
end
 