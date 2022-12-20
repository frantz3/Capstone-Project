require 'uri'
require 'net/http'
require 'openssl'


url = URI("https://fitness-calculator.p.rapidapi.com/bodyfat?age=25&gender=male&weight=70&height=178&neck=50&waist=96&hip=92")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true
http.verify_mode = OpenSSL::SSL::VERIFY_NONE

request = Net::HTTP::Get.new(url)
request["X-RapidAPI-Key"] = 'aeaeefc578msh5552969623a1459p13922djsn8a600bce19d0'
request["X-RapidAPI-Host"] = 'fitness-calculator.p.rapidapi.com'

response = http.request(request)
bod = JSON.parse(response.body)
# ///////////////////////////////////////////
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

user = User.create(username: "qwertyu", email: "qwertyu@aol.com", password: "123")
5.times do
   

    name = Faker::Name.name
    exercise_id = Exercise.all.sample.id

    workout = Workout.create(
        name: name,
        exercise_id: exercise_id )
        user.workouts << workout
    

end






