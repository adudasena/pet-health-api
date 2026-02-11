package com.pethealth.pet_api.repository;

import com.pethealth.pet_api.model.Pet;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

    @Repository
    public interface PetRepository extends JpaRepository<Pet, Long> { //id da classe é tipo Long

    }