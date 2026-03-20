package com.example.pharmacybackend;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;

@RestController
@RequestMapping("/api/tax")
@CrossOrigin(origins = "*")
public class TaxRegistrationController {

    private final TaxRegistrationRepository repository;

    public TaxRegistrationController(TaxRegistrationRepository repository) {
        this.repository = repository;
    }

    @PostMapping("/register")
    public ResponseEntity<?> registerTax(@RequestBody TaxRegistration taxRegistration) {
        if (taxRegistration.getSiteId() == null) {
            taxRegistration.setSiteId(1L);
        }
        if (taxRegistration.getCreatedOn() == null) {
            taxRegistration.setCreatedOn(LocalDateTime.now());
        }
        if (taxRegistration.getIsActive() == null) {
            taxRegistration.setIsActive(true);
        }
        TaxRegistration saved = repository.save(taxRegistration);
        return ResponseEntity.ok(saved);
    }
}
