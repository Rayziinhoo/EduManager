package com.example.edumanager.controllers;

import com.example.edumanager.entities.Usuario;
import com.example.edumanager.repository.UsuarioRepository;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/usuarios")
@Tag(name = "Usuarios", description = "Grupo de APIs responsável por controlar a estrutura de criação e consulta de usuários do sistema!")
public class UsuarioController {


    // INJENÇÃO DE INDEPENDENCIA
    @Autowired
    private UsuarioRepository usuarioRepository;

    @GetMapping
    @Operation(summary = "Método de consulta de lista de usuários!",
            description = "Método responsável de todos os usuarios sem filtro!")
    public ResponseEntity<?> listarTodos(){


        return ResponseEntity.ok(usuarioRepository.findAll());
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    @Operation( summary = "Método de criação de usuários!",
            description = "Método responsável em efetuar a criação de novos usuários!")
    public ResponseEntity<Usuario> criar ( @RequestBody Usuario usuario){
        var usuarioBanco = usuarioRepository.save(usuario);
        return ResponseEntity.ok(usuarioBanco);
    }
}
