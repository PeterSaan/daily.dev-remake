package models

import "gorm.io/gorm"

type ReadingHistory struct {
	gorm.Model
	UserID			uint	`gorm:"uniqueIndex:user-post"`
	PostID			uint	`gorm:"uniqueIndex:user-post"`
}
