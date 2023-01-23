up-pg:
	docker compose up workspace-database --remove-orphans

build-api:
	docker compose build workspace-api-worker

up-api:
	docker compose up workspace-api-worker

build-migration:
	docker compose build migration-container

up-migration:
	docker compose up migration-container