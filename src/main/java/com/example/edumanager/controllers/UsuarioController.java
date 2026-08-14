package com.example.edumanager.controllers;

import com.example.edumanager.entities.Usuario;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/usuarios")
public class UsuarioController {

    @GetMapping
    public ResponseEntity<?> listarTodos(){

        List<Usuario> usuarios = List.of(new Usuario(1L,"Rayrison","11055741992","123456","rayoficial123@gmail.com"));

        return ResponseEntity.ok(usuarios);
    }
}
