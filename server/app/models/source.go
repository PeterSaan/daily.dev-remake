package models

import "gorm.io/gorm"

type Source struct {
	gorm.Model
	UserID		uint
	User			User
	Verified	bool
}
