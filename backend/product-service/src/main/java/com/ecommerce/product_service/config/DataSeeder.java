package com.ecommerce.product_service.config;

import com.ecommerce.product_service.model.Product;
import com.ecommerce.product_service.repository.ProductRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.math.BigDecimal;
import java.util.List;

@Component
@RequiredArgsConstructor
@Slf4j
public class DataSeeder implements CommandLineRunner {

    private final ProductRepository productRepository;

    @Override
    public void run(String... args) throws Exception {
        if (productRepository.count() == 0) {
            log.info("Product database is empty. Seeding initial sample data...");

            Product laptop = new Product(
                    null,
                    "High-Performance Laptop",
                    "A powerful laptop designed for professionals and gamers. Features 32GB RAM, 1TB NVMe SSD, and dedicated RTX graphics.",
                    new BigDecimal("1499.99"),
                    50
            );

            Product keyboard = new Product(
                    null,
                    "Mechanical Keyboard",
                    "Premium RGB backlit mechanical keyboard with tactile brown switches for the ultimate typing experience.",
                    new BigDecimal("129.50"),
                    150
            );

            Product mouse = new Product(
                    null,
                    "Wireless Mouse",
                    "Ergonomic wireless mouse with ultra-low latency, precision tracking, and 70-hour battery life.",
                    new BigDecimal("59.99"),
                    200
            );

            productRepository.saveAll(List.of(laptop, keyboard, mouse));
            
            log.info("Successfully seeded 3 sample products into the database.");
        } else {
            log.info("Products already exist in the database. Skipping automatic seeding.");
        }
    }
}
