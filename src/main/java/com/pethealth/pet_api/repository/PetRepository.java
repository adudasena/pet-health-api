package com.pethealth.pet_api.repository;

import com.pethealth.pet_api.model.Pet;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

    @Repository
public interface PetRepository extends JpaRepository<Pet, Long> {
    // Busca automática por nome do pet contendo uma string (ignora maiúsculas/minúsculas)
    List<Pet> findByNameContainingIgnoreCase(String name);
}