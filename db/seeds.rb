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

body.each  {|e| Exercise.create( bodypart: e["bodyPart"], equipment: e["equipment"], gifUrl: e["gifUrl"], name: e["name"], target: e["target"])}

binding.pry