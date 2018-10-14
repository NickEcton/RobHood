# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2018_10_14_213200) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "assets", force: :cascade do |t|
    t.string "Symbol", null: false
    t.string "Company", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["Symbol"], name: "index_assets_on_Symbol"
  end

  create_table "orders", force: :cascade do |t|
    t.integer "asset_id", null: false
    t.integer "portfolio_id", null: false
    t.integer "price", null: false
    t.integer "quantity", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["asset_id"], name: "index_orders_on_asset_id"
    t.index ["portfolio_id"], name: "index_orders_on_portfolio_id"
  end

  create_table "portfolios", force: :cascade do |t|
    t.integer "user_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_portfolios_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.string "email", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["session_token"], name: "index_users_on_session_token"
    t.index ["username"], name: "index_users_on_username"
  end

end
