class RemoveNewFromUsers < ActiveRecord::Migration
  def change
    remove_column :users, :new, :string
  end
end
