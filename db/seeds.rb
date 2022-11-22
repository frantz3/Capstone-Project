require 'uri'
require 'net/http'
require 'openssl'

url = URI("https://exercisedb.p.rapidapi.com/exercises")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true
http.verify_mode = OpenSSL::SSL::VERIFY_NONE

request = Net::HTTP::Get.new(url)
request["X-RapidAPI-Key"] = 'aeaeefc578msh5552969623a1459p13922djsn8a600bce19d0'
request["X-RapidAPI-Host"] = 'exercisedb.p.rapidapi.com'

response = http.request(request)
body = JSON.parse(response.body)


body.each  do |e|
     Exercise.create( bodypart: e["bodyPart"], equipment: e["equipment"], gifUrl: e["gifUrl"], name: e["name"], target: e["target"])

end

5.times do
    user = User.create(Faker::Internet.user('username', 'email', 'password'))

    name = Faker::Name.name
    exercise_id = Exercise.all.sample.id


    workout = Workout.create(
        name: name,
        exercise_id: exercise_id )
        user.workouts << workout

end



# t.string "first_name"
# t.string "last_name"
# t.string "password_digest"
# t.string "username"
# t.string "email"
# exercises = JSON.parse(response.body)



#  exercises.each do |e| 

#      Exercise.create(
#          bodypart: e["bodyPart"],
#         equipment: e["equipment"],
#         gifUrl: e["gifUrl"], 
#         name: e["name"], 
#         target: e["target"]
#     )
    
# end
# binding.pry
# exercise_id = Exercise.all.sample.id
  


# 5.times do
#     use = Faker::Internet.user(  "username","password", "email")
#     user = User.create(use)
    
#     5.times do
#         name = Faker::Name.name
        
        
#         workout = Workout.create(
#             name: name,
#             exercise_id: Exercise.ids,
            
#         )
        
#         user.workouts << workout
#     end
    
# end
    