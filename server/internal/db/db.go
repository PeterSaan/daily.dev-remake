package db

import (
	"fmt"
	"log"
	"os"

	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

func Connect() *gorm.DB {
	dbUser := os.Getenv("MARIADB_USER")
	dbPassword := os.Getenv("MARIADB_PASSWORD")
	dbProtocol := os.Getenv("MARIADB_PROTOCOL")
	dbHost := os.Getenv("MARIADB_HOST")
	dbPort := os.Getenv("MARIADB_PORT")
	dbName := os.Getenv("MARIADB_NAME")
	timezone := os.Getenv("TZ")

	dsn := fmt.Sprintf("%s:%s@%s(%s:%s)/%s?charset=utf8mb4&parseTime=True&loc=%s", dbUser, dbPassword, dbProtocol, dbHost, dbPort, dbName, timezone)

	db, err := gorm.Open(mysql.Open(dsn), &gorm.Config{})
	if err != nil {
		log.Fatal(err)
	}

	return db
}
