package com.example.edumanager.controllers;

import com.example.edumanager.entities.EnumStatusTurma;
import com.example.edumanager.entities.EnumStatusUsuario;
import com.example.edumanager.entities.Turma;
import com.example.edumanager.entities.Usuario;
import com.example.edumanager.repository.TurmaRepository;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/turmas")
@Tag(name = "Turmas", description = "Grupo de APIs responsável por controlar a estrutura de criação, consulta, alteração e exclusão de turmas do sistema!")
public class TurmaController {

    @Autowired
    private TurmaRepository turmaRepository;

    @GetMapping
    @Operation(summary = "Método de consulta de lista de turmas!",
            description = "Método responsável de todas as turmas sem filtro!")
    public ResponseEntity<?> listarTodos() {

        return ResponseEntity.ok(turmaRepository.findAll());
    }

    @PostMapping("/cadastro")
    @ResponseStatus(HttpStatus.CREATED)
    @Operation( summary = "Método de criação de turmas!",
            description = "Método responsável em efetuar a criação de novas turmas!")
    public ResponseEntity<Turma> criar( @RequestBody Turma turma) {
        var turmaBanco = turmaRepository.save(turma);
        return ResponseEntity.ok(turmaBanco);
    }

    @PutMapping("/{id}")
    @Operation(summary = "Método de atualização total da turma!",
            description = "Método responsável por alterar qualquer dado da turma!")
    public ResponseEntity<Turma> atualizar(@PathVariable Long id, @RequestBody Turma turma) {
        try {
            Turma turmaBanco = turmaRepository.findById(id).orElse(null);
            if ( turmaBanco != null ) {
                turmaBanco.setStatus(turma.getStatus());
                turmaBanco.setAno(turma.getAno());
                turmaBanco.setDisciplina(turma.getDisciplina());
                turmaBanco.setSala(turma.getSala());
                turmaBanco.setNome(turma.getNome());
                turmaBanco.setPeriodo(turma.getPeriodo());
                turmaBanco.setTurno(turma.getTurno());
                turmaRepository.save(turmaBanco);

                return ResponseEntity.ok().build();

            }
            return ResponseEntity.notFound().build();
        } catch (RuntimeException e) {
            throw new RuntimeException(e);
        }
    }


    @DeleteMapping("/{id}/excluir")
    @Operation(summary = "Método de exclusão de turma!",
            description = "Método responsável excluir turmas!")
    public ResponseEntity<Void> excluir(@PathVariable Long id){

        Turma turmaBanco = turmaRepository.findById(id).orElse(null);
        if ( turmaBanco != null ) {
            turmaBanco.setStatus(EnumStatusTurma.FECHADA);
            turmaRepository.save(turmaBanco);


            return ResponseEntity.ok().build();

        }
        return ResponseEntity.notFound().build();
    }

}
