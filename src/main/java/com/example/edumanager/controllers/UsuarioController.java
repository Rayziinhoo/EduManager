package com.example.edumanager.controllers;

import com.example.edumanager.DTOs.AtualizarSenhaRequest;
import com.example.edumanager.DTOs.AtualizarStatusRequest;
import com.example.edumanager.entities.EnumStatusUsuario;
import com.example.edumanager.entities.Usuario;
import com.example.edumanager.repository.UsuarioRepository;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.junit.platform.commons.function.Try;
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

    @GetMapping("/{id}")
    @Operation(summary = "Método de consulta de usuário por id!",
            description = "Método responsável por buscar usuários baseados em seus id!")
    public ResponseEntity<Usuario> buscarPorId(@PathVariable Long id){
        Usuario usuarioBanco = usuarioRepository.findById(id).orElse(null);
        if ( usuarioBanco != null ) {
            return ResponseEntity.ok(usuarioBanco);
        }
        return ResponseEntity.notFound().build();

    }

    @PostMapping("/cadastro")
    @ResponseStatus(HttpStatus.CREATED)
    @Operation( summary = "Método de criação de usuários!",
            description = "Método responsável em efetuar a criação de novos usuários!")
    public ResponseEntity<Usuario> criar ( @RequestBody Usuario usuario){
        var usuarioBanco = usuarioRepository.save(usuario);
        return ResponseEntity.ok(usuarioBanco);
    }


    @PatchMapping("/{id}/senha")
    @Operation(summary = "Método de atualização de senha do usuário!",
            description = "Método responsável por alterar a senha do usuário!")
    public ResponseEntity<Void> atualizarSenha(@PathVariable Long id, @RequestBody AtualizarSenhaRequest senhaRequest) {

        Usuario usuarioBanco = usuarioRepository.findById(id).orElse(null);
        if ( usuarioBanco != null ) {
            usuarioBanco.setSenha(String.valueOf(senhaRequest.senha()));
            usuarioRepository.save(usuarioBanco);


            return ResponseEntity.ok().build();

        }
        return ResponseEntity.notFound().build();
    }

    @PatchMapping("/{id}/status")
    @Operation(summary = "Método de atualização do status do usuário!",
            description = "Método responsável por alterar o status do usuário!")
    public ResponseEntity<Void> atualizarStatus(@PathVariable Long id, @RequestBody AtualizarStatusRequest statusRequest) {

        Usuario usuarioBanco = usuarioRepository.findById(id).orElse(null);
        if ( usuarioBanco != null ) {
            usuarioBanco.setStatus(statusRequest.status());
            usuarioRepository.save(usuarioBanco);


            return ResponseEntity.ok().build();

        }
        return ResponseEntity.notFound().build();
    }


    @PutMapping("/{id}")
    @Operation(summary = "Método de atualização total do usuário!",
            description = "Método responsável por alterar qualquer aspecto dado do usuário!")
    public ResponseEntity<Usuario> atualizar(@PathVariable Long id, @RequestBody Usuario usuario) {
        try {
            Usuario usuarioBanco = usuarioRepository.findById(id).orElse(null);
            if ( usuarioBanco != null ) {
                usuarioBanco.setStatus(usuario.getStatus());
                usuarioBanco.setCpf(usuario.getCpf());
                usuarioBanco.setEmail(usuario.getEmail());
                usuarioBanco.setSenha(usuario.getSenha());
                usuarioBanco.setNome(usuario.getNome());
                usuarioRepository.save(usuarioBanco);

                return ResponseEntity.ok().build();

            }
            return ResponseEntity.notFound().build();
        } catch (RuntimeException e) {
            throw new RuntimeException(e);
        }
    }


    @DeleteMapping("/{id}/excluir")

    @Operation(summary = "Método de exclusão de usuário!",
            description = "Método responsável excluir usuários!")
    public ResponseEntity<Void> excluir(@PathVariable Long id){

        Usuario usuarioBanco = usuarioRepository.findById(id).orElse(null);
        if ( usuarioBanco != null ) {
            usuarioBanco.setStatus(EnumStatusUsuario.EXCLUIDO);
            usuarioRepository.save(usuarioBanco);


            return ResponseEntity.ok().build();

        }
        return ResponseEntity.notFound().build();
    }

}
