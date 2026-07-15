package com.ecommerce.notification_service.consumer;

import lombok.extern.slf4j.Slf4j;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Service;

@Service
@Slf4j
public class NotificationConsumer {

    @KafkaListener(topics = "order-topic")
    public void consume(String message) {
        log.info("Received Notification: " + message);
    }
}
