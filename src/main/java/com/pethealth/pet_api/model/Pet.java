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
    @GeneratedValue(strategy = GenerationType.IDENTITY) //auto incremento
    private Long id;

    private String name;
    private String species;
    private String breed;
    private int age;
}