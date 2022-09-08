class CreateBusinesses < ActiveRecord::Migration[7.0]
  def change
    create_table :businesses do |t|
      t.string :biz_name,null: false, index: { unique: true }
      t.string :biz_type,null: false
      t.string :address, null: false
      t.string :hours, null: false
      t.text :about, null: false
      t.string :feature, null: false
      t.bigint :phone, null: false
      t.bigint :long, null: false
      t.bigint :lat, null: false

      t.timestamps
    end
  end
end
