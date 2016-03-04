# encoding: UTF-8
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

ActiveRecord::Schema.define(version: 20160304023927) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "annotations", force: :cascade do |t|
    t.integer  "author_id",              null: false
    t.integer  "snippet_id",             null: false
    t.text     "body",                   null: false
    t.integer  "upvotes",    default: 0
    t.integer  "downvotes",  default: 0
    t.datetime "created_at",             null: false
    t.datetime "updated_at",             null: false
    t.integer  "line_idx",               null: false
    t.string   "title",                  null: false
  end

  add_index "annotations", ["author_id"], name: "index_annotations_on_author_id", using: :btree
  add_index "annotations", ["line_idx", "snippet_id"], name: "index_annotations_on_line_idx_and_snippet_id", unique: true, using: :btree
  add_index "annotations", ["snippet_id"], name: "index_annotations_on_snippet_id", using: :btree

  create_table "languages", force: :cascade do |t|
    t.string   "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "languages", ["name"], name: "index_languages_on_name", unique: true, using: :btree

  create_table "snippet_comments", force: :cascade do |t|
    t.integer  "author_id",              null: false
    t.integer  "snippet_id",             null: false
    t.text     "body",                   null: false
    t.integer  "upvotes",    default: 0
    t.integer  "downvotes",  default: 0
    t.datetime "created_at",             null: false
    t.datetime "updated_at",             null: false
  end

  add_index "snippet_comments", ["author_id"], name: "index_snippet_comments_on_author_id", using: :btree
  add_index "snippet_comments", ["snippet_id"], name: "index_snippet_comments_on_snippet_id", using: :btree

  create_table "snippets", force: :cascade do |t|
    t.integer  "author_id",               null: false
    t.integer  "language_id",             null: false
    t.string   "title",                   null: false
    t.text     "body",                    null: false
    t.integer  "views",       default: 0
    t.datetime "created_at",              null: false
    t.datetime "updated_at",              null: false
    t.text     "desc",                    null: false
  end

  add_index "snippets", ["author_id"], name: "index_snippets_on_author_id", using: :btree
  add_index "snippets", ["language_id"], name: "index_snippets_on_language_id", using: :btree

  create_table "users", force: :cascade do |t|
    t.string   "username",                                        null: false
    t.string   "image_url",       default: "codegenius-logo.png"
    t.integer  "iq",              default: 0
    t.string   "password_digest",                                 null: false
    t.string   "session_token",                                   null: false
    t.datetime "created_at",                                      null: false
    t.datetime "updated_at",                                      null: false
    t.text     "body"
  end

  add_index "users", ["username"], name: "index_users_on_username", unique: true, using: :btree

end
