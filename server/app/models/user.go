package models

import "gorm.io/gorm"

type User struct {
	gorm.Model
	FullName 		*string
	Email 			string	`gorm:"unique"`
	Username 		string
	Password 		string
	Reputation 	uint32	`gorm:"default:10"`
	Bio					*string
	Streak			*uint16
	Verified		bool		`gorm:"default:false"`
	Posts				[]Post	`gorm:"many2many:reading_histories"`
	Comment			Comment
}
