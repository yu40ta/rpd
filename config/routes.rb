Rails.application.routes.draw do
  root 'todos#index'
  get 'todos/show'
  get 'todos/new'
  get 'todos/edit'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
