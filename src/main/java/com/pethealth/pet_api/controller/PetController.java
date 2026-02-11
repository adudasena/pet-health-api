package com.pethealth.pet_api.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/pets") // define que todos os caminhos aqui começam com /pets
public class PetController {

    @GetMapping("/hello")
    public String helloWorld() {
        return "The PetHealth API is online!";
    }
}