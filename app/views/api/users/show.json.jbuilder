json.user do
    json.extract! @user, :id, :email, :username, :created_at, :updated_at
    json.photo_url @user.photo.url
  end

  