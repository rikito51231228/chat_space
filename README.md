# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...

# chat_space DB設計
## usersテーブル
|Column|Type|Option|
|------|----|------|
|user_name|string|null: false|
|email|string|null: false, unique: true|
|password|string|null:false|
### Association
-has_many :chats
-has_many :groups, through :groups_users

## groupsテーブル
|Column|Type|Option|
|------|----|------|
|group_name|string|null: false|
### Assoceation
- has_many :chats
- has_many :users, through :groups_users

## groups_usersテーブル
|Column|Type|Option|
|------|----|------|
|user-id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
### Association
- belongs_to :users
- belongs_to :groups

## chatsテーブル
|Column|Type|Option|
|------|----|------|
|text|text|null: false|
|group_id|integer|null: false, foreign_key: true|
|user_id|integer|null: false, foreign_key: true|
### Association
- belongs_to :users
- belongs_to :groups


