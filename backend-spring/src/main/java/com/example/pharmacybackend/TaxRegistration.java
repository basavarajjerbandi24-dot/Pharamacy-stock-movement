package com.example.pharmacybackend;

import jakarta.persistence.*;
import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity
@Table(name = "ecs_inv_tax_reg_master")
public class TaxRegistration {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "site_id")
    private Long siteId;

    @Column(name = "type_of_tax_id")
    private String typeOfTaxId;

    @Column(name = "agency")
    private String agency;

    @Column(name = "reg_num")
    private String regNum;

    @Column(name = "reg_date")
    private LocalDate regDate;

    @Column(name = "modvat")
    private Boolean modvat;

    @Column(name = "created_on")
    private LocalDateTime createdOn;

    @Column(name = "created_by")
    private String createdBy;

    @Column(name = "is_active")
    private Boolean isActive;

    @Column(name = "expires_on")
    private LocalDate expiresOn;

    @Column(name = "activates_from")
    private LocalDate activatesFrom;

    // Getters and setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    public Long getSiteId() { return siteId; }
    public void setSiteId(Long siteId) { this.siteId = siteId; }
    public String getTypeOfTaxId() { return typeOfTaxId; }
    public void setTypeOfTaxId(String typeOfTaxId) { this.typeOfTaxId = typeOfTaxId; }
    public String getAgency() { return agency; }
    public void setAgency(String agency) { this.agency = agency; }
    public String getRegNum() { return regNum; }
    public void setRegNum(String regNum) { this.regNum = regNum; }
    public LocalDate getRegDate() { return regDate; }
    public void setRegDate(LocalDate regDate) { this.regDate = regDate; }
    public Boolean getModvat() { return modvat; }
    public void setModvat(Boolean modvat) { this.modvat = modvat; }
    public LocalDateTime getCreatedOn() { return createdOn; }
    public void setCreatedOn(LocalDateTime createdOn) { this.createdOn = createdOn; }
    public String getCreatedBy() { return createdBy; }
    public void setCreatedBy(String createdBy) { this.createdBy = createdBy; }
    public Boolean getIsActive() { return isActive; }
    public void setIsActive(Boolean isActive) { this.isActive = isActive; }
    public LocalDate getExpiresOn() { return expiresOn; }
    public void setExpiresOn(LocalDate expiresOn) { this.expiresOn = expiresOn; }
    public LocalDate getActivatesFrom() { return activatesFrom; }
    public void setActivatesFrom(LocalDate activatesFrom) { this.activatesFrom = activatesFrom; }
}
