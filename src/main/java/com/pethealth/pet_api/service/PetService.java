package com.pethealth.pet_api.service;

import com.pethealth.pet_api.model.Pet;
import com.pethealth.pet_api.repository.PetRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class PetService {

    @Autowired
    private PetRepository repository;

    public List<Pet> listarTodos() {
        return repository.findAll();
    }

    public Pet salvar(Pet pet) {
        return repository.save(pet);
    }
}