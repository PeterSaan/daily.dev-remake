package models

import "gorm.io/gorm"

type Comment struct {
	gorm.Model
	UserID		uint
	PostID		uint
	Body			string
	Upvotes		uint32
}
