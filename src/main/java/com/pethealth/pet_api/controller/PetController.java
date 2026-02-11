package com.pethealth.pet_api.controller;

import com.pethealth.pet_api.model.Pet;
import com.pethealth.pet_api.service.PetService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/pets")
public class PetController {

    @Autowired
    private PetService service;

    @GetMapping
    public List<Pet> listar() {
        return service.listarTodos();
    }

    @PostMapping
    public Pet criar(@RequestBody Pet pet) {
        return service.salvar(pet);
    }
}