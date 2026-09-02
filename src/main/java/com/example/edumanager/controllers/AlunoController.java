package com.example.edumanager.controllers;

import com.example.edumanager.entities.Aluno;
import com.example.edumanager.entities.EnumStatusAluno;
import com.example.edumanager.entities.EnumStatusUsuario;
import com.example.edumanager.entities.Usuario;
import com.example.edumanager.repository.AlunoRepository;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/alunos")
@Tag(name = "Alunos", description = "Grupo de APIs responsáveis por controlar a estrutura de criação, consulta, alteração e exclusão de alunos do sistema!")
public class AlunoController {

    @Autowired
    private AlunoRepository alunoRepository;

    @GetMapping
    @Operation(summary = "Método de consulta de lista de alunos!",
            description = "Método responsável de todos os alunos sem filtro!")
    public ResponseEntity<?> listarTodos() {

        return ResponseEntity.ok(alunoRepository.findAll());
    }

    @GetMapping("/{id}")
    @Operation(summary = "Método de consulta de aluno por id!",
            description = "Método responsável por buscar alunos baseados em seus id!")
    public ResponseEntity<Aluno> buscarPorId(@PathVariable Long id) {
        Aluno alunoBanco = alunoRepository.findById(id).orElse(null);
        if (alunoBanco != null) {
            return ResponseEntity.ok(alunoBanco);
        }
        return ResponseEntity.notFound().build();

    }

    @PostMapping("/cadastro")
    @ResponseStatus(HttpStatus.CREATED)
    @Operation(summary = "Método de criação de alunos!",
            description = "Método responsável em efetuar a criação de novos alunos!")
    public ResponseEntity<Aluno> criar(@RequestBody Aluno aluno) {
        var alunoBanco = alunoRepository.save(aluno);
        return ResponseEntity.ok(alunoBanco);
    }


    @PutMapping("/{id}")
    @Operation(summary = "Método de atualização total do aluno!",
            description = "Método responsável por alterar qualquer dado do aluno!")
    public ResponseEntity<Aluno> atualizar(@PathVariable Long id, @RequestBody Aluno aluno) {
        try {
            Aluno alunoBanco = alunoRepository.findById(id).orElse(null);
            if (alunoBanco != null) {
                alunoBanco.setStatus(aluno.getStatus());
                alunoBanco.setCPF(aluno.getCPF());
                alunoBanco.setEmail(aluno.getEmail());
                alunoBanco.setDataNascimento(aluno.getDataNascimento());
                alunoBanco.setNome(aluno.getNome());
                alunoBanco.setMatricula(aluno.getMatricula());
                alunoBanco.setDataMatricula(aluno.getDataMatricula());
                alunoBanco.setSenha(aluno.getSenha());
                alunoRepository.save(alunoBanco);

                return ResponseEntity.ok().build();

            }
            return ResponseEntity.notFound().build();
        } catch (RuntimeException e) {
            throw new RuntimeException(e);
        }
    }

    @DeleteMapping("/{id}/excluir")
    @Operation(summary = "Método de exclusão de aluno!",
            description = "Método responsável excluir alunos!")
    public ResponseEntity<Void> excluir(@PathVariable Long id){

        Aluno alunoBanco = alunoRepository.findById(id).orElse(null);
        if ( alunoBanco != null ) {
            alunoBanco.setStatus(EnumStatusAluno.INATIVO);
            alunoRepository.save(alunoBanco);


            return ResponseEntity.ok().build();

        }
        return ResponseEntity.notFound().build();
    }
}
