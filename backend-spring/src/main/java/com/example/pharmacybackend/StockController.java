package com.example.pharmacybackend;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class StockController {

    @GetMapping("/api/stock")
    public String getStock() {
        return "Stock data from Spring Boot";
    }
}