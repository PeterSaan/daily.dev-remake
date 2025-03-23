package models

import "gorm.io/gorm"

type Post struct {
	gorm.Model
	UserID		uint
	Title 		string
	Body 			*string
	Link 			*string
	Upvotes 	uint32
	Topics		[]Topic	`gorm:"many2many:post_topics"`
	Comments	[]Comment
}
