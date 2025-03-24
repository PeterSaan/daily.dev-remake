package database

import (
	"fmt"
	"log"
	"net/url"
	"os"

	"github.com/joho/godotenv"
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

var DB *gorm.DB

func Connect() (*gorm.DB, error) {
	if err := godotenv.Load(); err != nil {
		return nil, err
	}

	dbUser := os.Getenv("MARIADB_USER")
	dbPassword := os.Getenv("MARIADB_PASSWORD")
	dbProtocol := os.Getenv("MARIADB_PROTOCOL")
	dbHost := os.Getenv("MARIADB_HOST")
	dbPort := os.Getenv("MARIADB_PORT")
	dbName := os.Getenv("MARIADB_DATABASE")
	timezone := os.Getenv("TZ")

	dsn := fmt.Sprintf(
		"%s:%s@%s(%s:%s)/%s?charset=utf8mb4&parseTime=True&loc=%s",
		url.PathEscape(dbUser),
		url.PathEscape(dbPassword),
		url.PathEscape(dbProtocol),
		url.PathEscape(dbHost),
		url.PathEscape(dbPort),
		url.PathEscape(dbName),
		url.PathEscape(timezone),
	)

	db, err := gorm.Open(mysql.Open(dsn), &gorm.Config{})
	if err != nil {
		return nil, err
	}
	log.Println("Database connection successful")

	return db, nil
}

func GetDB() *gorm.DB {
	return DB
}
