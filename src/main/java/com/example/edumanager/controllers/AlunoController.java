package com.example.edumanager.controllers;

import com.example.edumanager.entities.Aluno;
import com.example.edumanager.entities.Usuario;
import com.example.edumanager.repository.AlunoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/alunos")
public class AlunoController {

    @Autowired
    private AlunoRepository alunoRepository;

    @GetMapping
    public ResponseEntity<?> listarTodos(){

        return ResponseEntity.ok(alunoRepository.findAll());
    }

    @PostMapping
    @ResponseStatus
    public ResponseEntity<Aluno> criar ( @RequestBody Aluno aluno) {
        var alunoBanco = alunoRepository.save(aluno);
        return ResponseEntity.ok(alunoBanco);
    }

}
