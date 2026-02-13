package com.pethealth.pet_api.model;

import jakarta.persistence.*; //regras JPA
import lombok.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Pet {

@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String species;
    private String breed;
    private int age;
    private String ownerName; // Nome do dono
    private String healthStatus; // Healthy, Sick, Recovered
    private String medicalNotes; // Notas de tratamento
}