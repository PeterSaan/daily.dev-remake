package main

import (
	"daily.dev-remake/internal/db"
	"net/http"

	"github.com/gin-gonic/gin"
)

func main() {
	router := gin.Default()

	router.GET("/", func(ctx *gin.Context) {
		ctx.JSON(http.StatusOK, gin.H{
			"hello": "world",
		})
	})

	router.Run(":3006")
}
