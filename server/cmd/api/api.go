package main

import (
	"log"

	"daily.dev-remake/app/controllers"
	"daily.dev-remake/internal/database"
	"github.com/gin-gonic/gin"
)

func main() {
	trustedProxies := []string {
		"daily.dev-remake_client:3000",
		"localhost:3000",
	}
	router := gin.Default()
	router.SetTrustedProxies(trustedProxies)
	v1 := router.Group("/v1")

	db, err := database.Connect()
	if err != nil {
		log.Fatal(err)
	}

	if err := database.Migrate(db); err != nil {
		log.Fatal(err)
	}

	v1.GET("/", controllers.IndexController)

	router.Run(":3006")
}
