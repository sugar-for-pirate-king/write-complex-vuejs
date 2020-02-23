Rails.application.routes.draw do
  scope :web, module: :web do
    resources :users, only: %i[new] do
      collection do
        get 'new_step2'
        get 'new_step3'
      end
    end 
  end
end
