up-pg:
	docker compose up workspace-database

build-api:
	docker compose build workspace-worker

up-api:
	docker compose up workspace-worker --remove-orphans