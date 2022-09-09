class ChangeBusiness < ActiveRecord::Migration[7.0]
  def change
    add_column :businesses, :website, :text, null: false

  end
end
