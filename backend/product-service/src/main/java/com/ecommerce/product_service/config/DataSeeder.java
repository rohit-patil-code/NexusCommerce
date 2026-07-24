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
        if (productRepository.count() <= 3) {
            log.info("Product database has <= 3 items. Seeding additional products...");

            Product p1 = new Product(null, "MSI Alpha 15 Developer Edition", "High-performance laptop optimized for compiling code and running local Docker containers.", new BigDecimal("1299.00"), 100);
            Product p2 = new Product(null, "ProType External Mechanical Keyboard", "Tactile, hot-swappable switches in a compact 75% layout for extended coding sessions.", new BigDecimal("149.99"), 100);
            Product p3 = new Product(null, "UltraView 34\" Curved Monitor", "4K ultra-wide resolution, perfect for viewing multiple IDE windows side-by-side.", new BigDecimal("699.00"), 100);
            Product p4 = new Product(null, "Precision Master Mouse", "Ergonomic wireless mouse with customizable side buttons.", new BigDecimal("89.99"), 100);
            Product p5 = new Product(null, "NexusDesk Standing Desk", "Dual-motor adjustable height desk with a solid walnut top.", new BigDecimal("449.00"), 100);
            Product p6 = new Product(null, "Aura Screen Light Bar", "Reduces screen glare and eye strain during late-night work.", new BigDecimal("59.00"), 100);
            Product p7 = new Product(null, "Nova Noise-Cancelling Headphones", "Over-ear, 40-hour battery life for deep focus.", new BigDecimal("299.00"), 100);
            Product p8 = new Product(null, "MagCharge Desk Stand", "3-in-1 magnetic wireless charger for phone, watch, and earbuds.", new BigDecimal("65.00"), 100);
            Product p9 = new Product(null, "Carbon Fiber Desk Mat", "900x400mm waterproof, anti-slip surface.", new BigDecimal("35.00"), 100);
            Product p10 = new Product(null, "StudioPro Web Camera", "4K streaming camera with AI auto-framing for daily standups.", new BigDecimal("199.00"), 100);
            Product p11 = new Product(null, "Acoustic Desk Panels", "Minimalist felt privacy panels with sound absorption.", new BigDecimal("120.00"), 100);
            Product p12 = new Product(null, "Orbit Wrist Rest", "Memory foam ergonomic wrist support for keyboards.", new BigDecimal("25.00"), 100);
            Product p13 = new Product(null, "Thunderbolt 4 Dock", "11-in-1 docking station with 90W power delivery.", new BigDecimal("249.00"), 100);
            Product p14 = new Product(null, "Nexus Mesh Chair", "Ergonomic office chair with lumbar support and adjustable armrests.", new BigDecimal("399.00"), 100);
            Product p15 = new Product(null, "Artisan Monochrome Keycap Set", "Double-shot PBT keycaps with a stealth black-and-white profile.", new BigDecimal("45.00"), 100);
            Product p16 = new Product(null, "Cable Management Spine", "Under-desk routing spine for heavy cables.", new BigDecimal("29.00"), 100);
            Product p17 = new Product(null, "2TB NVMe Gen4 SSD", "Ultra-fast storage expansion for large databases and project files.", new BigDecimal("179.00"), 100);

            productRepository.saveAll(List.of(p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13, p14, p15, p16, p17));
            
            log.info("Successfully seeded 17 additional products into the database.");
        } else {
            log.info("Sufficient products already exist in the database. Skipping automatic seeding.");
        }
    }
}
