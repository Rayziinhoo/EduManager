package com.example.edumanager.controllers;

import com.example.edumanager.entities.Turma;
import com.example.edumanager.repository.TurmaRepository;
import io.swagger.v3.oas.annotations.Operation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/turmas")
public class TurmaController {

    @Autowired
    private TurmaRepository turmaRepository;

    @GetMapping
    @Operation(summary = "Método de consulta de lista de turmas!",
            description = "Método responsável de todas as turmas sem filtro!")
    public ResponseEntity<?> listarTodos() {

        return ResponseEntity.ok(turmaRepository.findAll());
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    @Operation( summary = "Método de criação de turmas!",
            description = "Método responsável em efetuar a criação de novas turmas!")
    public ResponseEntity<Turma> criar( @RequestBody Turma turma) {
        var turmaBanco = turmaRepository.save(turma);
        return ResponseEntity.ok(turmaBanco);
    }

}
