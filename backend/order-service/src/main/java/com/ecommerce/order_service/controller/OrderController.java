package com.ecommerce.order_service.controller;

import com.ecommerce.order_service.model.Order;
import com.ecommerce.order_service.repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.reactive.function.client.WebClient; // Added import

@RestController
@RequestMapping("/api/orders")
public class OrderController {

    private final OrderRepository orderRepository;
    private final KafkaTemplate<String, String> kafkaTemplate;
    private final WebClient.Builder webClientBuilder; // Added field

    @Autowired
    public OrderController(OrderRepository orderRepository,
            KafkaTemplate<String, String> kafkaTemplate,
            WebClient.Builder webClientBuilder) { // Added to constructor
        this.orderRepository = orderRepository;
        this.kafkaTemplate = kafkaTemplate;
        this.webClientBuilder = webClientBuilder;
    }

    @PostMapping
    public ResponseEntity<String> placeOrder(@RequestBody Order order) {

        // 1. Call Inventory Service synchronously
        Boolean inStock = webClientBuilder.build().get()
                .uri("http://inventory-service/api/inventory/" + order.getSkuCode())
                .retrieve()
                .bodyToMono(Boolean.class)
                .block(); // .block() makes this synchronous

        // 2. Decide what to do based on the response
        if (Boolean.TRUE.equals(inStock)) {
            orderRepository.save(order);
            kafkaTemplate.send("order-topic", "Order Placed: " + order.getOrderNumber());
            return ResponseEntity.status(HttpStatus.CREATED).body("Order Placed Successfully");
        } else {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body("Product is out of stock, please try again later.");
        }
    }
}