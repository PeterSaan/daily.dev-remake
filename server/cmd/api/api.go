package main

import (
	"daily.dev-remake/app/controllers"
	"github.com/gin-gonic/gin"
)

func main() {
	router := gin.Default()
	v1 := router.Group("/v1")

	v1.GET("/", controllers.IndexController)

	router.Run(":3006")
}
