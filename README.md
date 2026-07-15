# NexusCommerce

NexusCommerce is a modern, scalable e-commerce backend built with a microservices architecture using Java and Spring Boot.

## Architecture

The system is divided into several independent microservices:

- **API Gateway**: Entry point for all clients, handling routing and cross-cutting concerns (Port: 8080).
- **Discovery Server (Eureka)**: Service registry for dynamic service discovery (Port: 8761).
- **Product Service**: Manages product catalog and information (Port: 8081).
- **Order Service**: Handles order placement and processing (Port: 8082).
- **Notification Service**: Listens for events via Kafka (like order placement) and handles asynchronous notifications (Port: 8083).
- **Inventory Service**: Manages stock levels and inventory tracking (Port: 8084).

## Tech Stack

- **Java 17** & **Spring Boot 3+**
- **Spring Cloud** (Gateway, Netflix Eureka)
- **PostgreSQL**: Relational databases for domain-specific persistence.
- **Apache Kafka**: Event-driven communication between services.
- **Docker & Docker Compose**: Containerization for local infrastructure setup.

## Getting Started

### Prerequisites
- Java 17+
- Maven
- Docker & Docker Compose

### Running the Infrastructure
1. Navigate to the `backend` folder.
2. The infrastructure (Databases, Kafka, Zookeeper, Redis) can be started using Docker Compose. Make sure your `.env` file with database credentials is present in the `backend/` folder.
3. Start the containers:
   ```bash
   cd backend
   docker-compose up -d
   ```

### Running the Microservices
Start the services in the following order to ensure they register correctly:
1. `discovery-server` (Wait for it to start completely on port 8761)
2. `api-gateway`
3. Domain services (`product-service`, `order-service`, `inventory-service`, `notification-service`)

You can run each service by navigating into its directory and using the Maven wrapper:
```bash
cd backend/product-service
./mvnw spring-boot:run
```
