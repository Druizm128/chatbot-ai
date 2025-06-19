# Makefile for chatbot-ai frontend

# Variables
IMAGE_NAME = chatbot-ai-frontend
CONTAINER_NAME = chatbot-frontend
PORT = 8080
DOCKER_PORT = 80

# Default target
.DEFAULT_GOAL := help

# Build the Docker image
.PHONY: build
build:
	@echo "Building Docker image..."
	docker build -t $(IMAGE_NAME) .

# Run the Docker container
.PHONY: run
run: build
	@echo "Running Docker container..."
	docker run -d -p $(PORT):$(DOCKER_PORT) --name $(CONTAINER_NAME) $(IMAGE_NAME)
	@echo "Container running at http://localhost:$(PORT)"

# Stop the Docker container
.PHONY: stop
stop:
	@echo "Stopping Docker container..."
	-docker stop $(CONTAINER_NAME)

# Remove the Docker container
.PHONY: remove
remove: stop
	@echo "Removing Docker container..."
	-docker rm $(CONTAINER_NAME)

# Clean up: remove container and image
.PHONY: clean
clean: remove
	@echo "Removing Docker image..."
	-docker rmi $(IMAGE_NAME)

# Show container logs
.PHONY: logs
logs:
	@echo "Showing container logs..."
	docker logs $(CONTAINER_NAME)

# Follow container logs
.PHONY: logs-follow
logs-follow:
	@echo "Following container logs (Ctrl+C to exit)..."
	docker logs -f $(CONTAINER_NAME)

# Restart the container
.PHONY: restart
restart: stop run

# Rebuild and restart (full refresh)
.PHONY: rebuild
rebuild: clean run

# Check container status
.PHONY: status
status:
	@echo "Container status:"
	@docker ps -a --filter name=$(CONTAINER_NAME)

# Execute shell in running container
.PHONY: shell
shell:
	@echo "Opening shell in container..."
	docker exec -it $(CONTAINER_NAME) /bin/sh

# Start with docker-compose
.PHONY: compose-up
compose-up:
	@echo "Starting with docker-compose..."
	docker-compose up -d

# Stop with docker-compose
.PHONY: compose-down
compose-down:
	@echo "Stopping with docker-compose..."
	docker-compose down

# Rebuild with docker-compose
.PHONY: compose-rebuild
compose-rebuild:
	@echo "Rebuilding with docker-compose..."
	docker-compose up -d --build

# Development commands
.PHONY: dev
dev:
	@echo "Starting development server..."
	npm run dev

# Install dependencies
.PHONY: install
install:
	@echo "Installing dependencies..."
	npm install

# Run linting
.PHONY: lint
lint:
	@echo "Running ESLint..."
	npm run lint

# Build for production (local)
.PHONY: build-local
build-local:
	@echo "Building for production locally..."
	npm run build

# Preview production build
.PHONY: preview
preview: build-local
	@echo "Previewing production build..."
	npm run preview

# Docker system cleanup
.PHONY: docker-clean
docker-clean:
	@echo "Cleaning up Docker system..."
	docker system prune -f

# CI/CD Commands
.PHONY: ci-test
ci-test:
	@echo "Running CI tests locally..."
	npm ci
	npm run lint
	npm run build
	docker build -t chatbot-test .
	docker rmi chatbot-test

.PHONY: ci-security
ci-security:
	@echo "Running security checks..."
	npm audit --audit-level=high

.PHONY: ci-full
ci-full: ci-security ci-test
	@echo "Full CI pipeline completed locally"

# Show help
.PHONY: help
help:
	@echo "Available commands:"
	@echo ""
	@echo "Docker Commands:"
	@echo "  build          - Build the Docker image"
	@echo "  run            - Build and run the container"
	@echo "  stop           - Stop the container"
	@echo "  remove         - Stop and remove the container"
	@echo "  clean          - Remove container and image"
	@echo "  restart        - Restart the container"
	@echo "  rebuild        - Clean rebuild and run"
	@echo "  logs           - Show container logs"
	@echo "  logs-follow    - Follow container logs"
	@echo "  status         - Show container status"
	@echo "  shell          - Open shell in container"
	@echo ""
	@echo "Docker Compose Commands:"
	@echo "  compose-up     - Start with docker-compose"
	@echo "  compose-down   - Stop with docker-compose"
	@echo "  compose-rebuild - Rebuild with docker-compose"
	@echo ""
	@echo "Development Commands:"
	@echo "  dev            - Start development server"
	@echo "  install        - Install npm dependencies"
	@echo "  lint           - Run ESLint"
	@echo "  build-local    - Build for production locally"
	@echo "  preview        - Preview production build"
	@echo ""
	@echo "  ci-test        - Run CI pipeline locally"
	@echo "  ci-security    - Run security audit"
	@echo "  ci-full        - Run full CI pipeline locally"
	@echo ""
	@echo "Utility Commands:"
	@echo "  docker-clean   - Clean up Docker system"
	@echo "  help           - Show this help message"
	@echo ""
	@echo "Examples:"
	@echo "  make run       - Build and run the container"
	@echo "  make logs      - View container logs"
	@echo "  make rebuild   - Clean rebuild everything"
