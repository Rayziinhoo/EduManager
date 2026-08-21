package com.example.edumanager.controllers;

import com.example.edumanager.entities.Nota;
import com.example.edumanager.repository.NotaRepository;
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
    public ResponseEntity<?> listarTodos() {

        return ResponseEntity.ok(notaRepository.findAll());
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public ResponseEntity<Nota> criar ( Nota nota) {
        var notaBanco = notaRepository.save(nota);
        return ResponseEntity.ok(notaBanco);
    }
}
