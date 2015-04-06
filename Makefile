export PATH := $(shell npm bin):$(PATH)

default:
	@npm install
	@grunt
