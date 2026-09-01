package com.example.edumanager.controllers;

import com.example.edumanager.entities.Nota;
import com.example.edumanager.entities.Usuario;
import com.example.edumanager.repository.NotaRepository;
import io.swagger.v3.oas.annotations.Operation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/notas")
public class NotaController {

    @Autowired
    private NotaRepository notaRepository;

    @GetMapping
    @Operation(summary = "Método de consulta de lista de notas!",
            description = "Método responsável de todas as notas sem filtro!")
    public ResponseEntity<?> listarTodos() {

        return ResponseEntity.ok(notaRepository.findAll());
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    @Operation( summary = "Método de criação de notas!",
            description = "Método responsável em efetuar a criação de novas notas!")
    public ResponseEntity<Nota> criar ( Nota nota) {
        var notaBanco = notaRepository.save(nota);
        return ResponseEntity.ok(notaBanco);
    }

    @GetMapping("/{id}")
    @Operation(summary = "Método de consulta de nota por id!",
            description = "Método responsável por buscar notas baseados em seus id!")
    public ResponseEntity<Nota> buscarPorId(@PathVariable Long id){
        Nota notaBanco = notaRepository.findById(id).orElse(null);
        if ( notaBanco != null ) {
            return ResponseEntity.ok(notaBanco);
        }
        return ResponseEntity.notFound().build();

    }
}
