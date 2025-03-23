package controllers

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func IndexController(ctx *gin.Context) {
	ctx.JSON(http.StatusOK, gin.H{
		"hello": "world",
	})
}
