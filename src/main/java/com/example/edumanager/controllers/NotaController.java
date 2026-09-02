package com.example.edumanager.controllers;

import com.example.edumanager.entities.EnumStatusTipoAvaliacao;
import com.example.edumanager.entities.EnumStatusUsuario;
import com.example.edumanager.entities.Nota;
import com.example.edumanager.entities.Usuario;
import com.example.edumanager.repository.NotaRepository;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/notas")
@Tag(name = "Notas", description = "Grupo de APIs responsável por controlar a estrutura de criação, consulta, alteração e exclusão de notas do sistema!")
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

    @PutMapping("/{id}")
    @Operation(summary = "Método de atualização total da nota!",
            description = "Método responsável por alterar qualquer dado da nota!")
    public ResponseEntity<Nota> atualizar(@PathVariable Long id, @RequestBody Nota nota) {
        try {
            Nota notaBanco = notaRepository.findById(id).orElse(null);
            if ( notaBanco != null ) {
                notaBanco.setValor(nota.getValor());
                notaBanco.setTipoAvaliacao(nota.getTipoAvaliacao());
                notaBanco.setDataAvaliacao(nota.getDataAvaliacao());
                // verificar como fazer a media
                notaRepository.save(notaBanco);

                return ResponseEntity.ok().build();

            }
            return ResponseEntity.notFound().build();
        } catch (RuntimeException e) {
            throw new RuntimeException(e);
        }
    }

    @DeleteMapping("/{id}/excluir")
    @Operation(summary = "Método de exclusão de nota!",
            description = "Método responsável excluir notas!")
    public ResponseEntity<Void> excluir(@PathVariable Long id){

        Nota notaBanco = notaRepository.findById(id).orElse(null);
        if ( notaBanco != null ) {
            notaBanco.setTipoAvaliacao(EnumStatusTipoAvaliacao.INVALIDA);
            notaRepository.save(notaBanco);


            return ResponseEntity.ok().build();

        }
        return ResponseEntity.notFound().build();
    }
}
