package database

import (
	"log"

	"daily.dev-remake/app/models"
	"gorm.io/gorm"
)

func Migrate(db *gorm.DB) error {
	modelList := []any {
		&models.Comment{},
		&models.Post{},
		&models.Source{},
		&models.Topic{},
		&models.User{},
		&models.ReadingHistory{},
	}

	for _, model := range modelList {
		tablePresent := false

		if db.Migrator().HasTable(model) {
			log.Printf("%T table found. Skipping migration.\n", model)
			tablePresent = true
		}

		if !tablePresent {
			log.Printf("Migrating %T\n", model)
			if err := db.AutoMigrate(model); err != nil {
				return err
			}
			log.Println("Done!")
		}
	}
	return nil
}
