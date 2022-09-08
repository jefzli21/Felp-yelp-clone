class CreateBusinesses < ActiveRecord::Migration[7.0]
  def change
    create_table :businesses do |t|
      t.string :biz_name,null: false, index: { unique: true }
      t.string :biz_type,null: false
      t.string :address, null: false
      t.string :hours, null: false
      t.text :about, null: false
      t.string :feature, null: false
      t.integer :phone, null: false
      t.references :owner, null: false, foreign_key: {to_table: :users}
      t.float :long, null: false
      t.float :lat, null: false

      t.timestamps
    end
  end
end
