class UserSerializer < ActiveModel::Serializer
  attributes :id, :id, :first_name, :last_name, :password_digest, :username, :email
end
