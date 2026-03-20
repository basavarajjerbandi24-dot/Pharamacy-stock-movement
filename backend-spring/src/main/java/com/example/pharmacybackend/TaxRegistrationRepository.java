package com.example.pharmacybackend;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TaxRegistrationRepository extends JpaRepository<TaxRegistration, Long> {
}
