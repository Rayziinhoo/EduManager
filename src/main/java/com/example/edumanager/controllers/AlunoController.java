package com.example.edumanager.controllers;

import com.example.edumanager.entities.Aluno;
import com.example.edumanager.entities.Usuario;
import com.example.edumanager.repository.AlunoRepository;
import io.swagger.v3.oas.annotations.Operation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/alunos")
public class AlunoController {

    @Autowired
    private AlunoRepository alunoRepository;

    @GetMapping
    @Operation(summary = "Metodo de consulta de lista de alunos!",
            description = "Método responsável de todos os alunos sem filtro!")
    public ResponseEntity<?> listarTodos(){

        return ResponseEntity.ok(alunoRepository.findAll());
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    @Operation( summary = "Método de criação de alunos!",
            description = "Método responsável em efetuar a criação de novos alunos!")
    public ResponseEntity<Aluno> criar ( @RequestBody Aluno aluno) {
        var alunoBanco = alunoRepository.save(aluno);
        return ResponseEntity.ok(alunoBanco);
    }

}
