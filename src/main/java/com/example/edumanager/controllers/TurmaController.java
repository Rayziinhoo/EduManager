package com.example.edumanager.controllers;

import com.example.edumanager.entities.Turma;
import com.example.edumanager.repository.TurmaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/turmas")
public class TurmaController {

    @Autowired
    private TurmaRepository turmaRepository;

    @GetMapping
    public ResponseEntity<?> listarTodos() {

        return ResponseEntity.ok(turmaRepository.findAll());
    }

    public ResponseEntity<Turma> criar( @RequestBody Turma turma) {
        var turmaBanco = turmaRepository.save(turma);
        return ResponseEntity.ok(turmaBanco);
    }

}
