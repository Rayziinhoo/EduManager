package com.example.edumanager.presentation;

import com.example.edumanager.application.DTOs.*;
import com.example.edumanager.application.services.UsuarioService;
import com.example.edumanager.domain.entities.EnumStatusUsuario;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/usuarios")
@Tag(name = "Usuarios", description = "Grupo de APIs responsável por controlar a estrutura de criação, consulta, alteração e exclusão de usuários do sistema!")
public class UsuarioController {

    @Autowired
    private UsuarioService usuarioService;

    @GetMapping
    @Operation(summary = "Método de consulta de lista de usuários!",
            description = "Método responsável de todos os usuarios sem filtro!")
    public ResponseEntity<List<UsuarioResponse>> listarTodos(){

        return  ResponseEntity.ok(usuarioService.listarTodosUsuariosTable());
    }

    @PostMapping("/admin")
    public ResponseEntity<CriarAdminResponse> criarAdmin(@RequestBody CriarAdminRequest criarAdminRequest){

        try{
            CriarAdminResponse respostaSalvar = usuarioService.criarAdmin(criarAdminRequest);
            return ResponseEntity.ok(respostaSalvar);

        } catch (RuntimeException e) {
            return ResponseEntity.badRequest().build();
        }

    }

    @GetMapping("/{id}")
    @Operation(summary = "Método de consulta de usuário por id!",
            description = "Método responsável por buscar usuários baseados em seus id!")
    public ResponseEntity<UsuarioResponse> buscarPorId(@PathVariable Long id){

        UsuarioResponse usuarioBanco = usuarioService.buscarPorId(id);
        if(usuarioBanco!= null ){
            return  ResponseEntity.ok(usuarioBanco);
        }

        return  ResponseEntity.notFound().build();
    }

    @PostMapping("/cadastro")
    @ResponseStatus(HttpStatus.CREATED)
    @Operation( summary = "Método de criação de usuários!",
            description = "Método responsável em efetuar a criação de novos usuários!")
    public ResponseEntity<?> criar ( @RequestBody UsuarioRequest usuario){

        try {
            UsuarioResponse usuarioBanco = usuarioService.salvarUsuario(usuario, 0L);
            return ResponseEntity.ok(usuarioBanco);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }

    }


   /* @PatchMapping("/{id}/senha")
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
    }*/

    @PatchMapping("/{id}/status")
    @Operation(summary = "Método de atualização do status do usuário!",
            description = "Método responsável por alterar o status do usuário!")
    public ResponseEntity<Void> atualizarStatus(@PathVariable Long id, @RequestBody AtualizarStatusRequest statusRequest) {

        var atualizarUsuario = usuarioService.atualizarStatus(statusRequest.status(),id);

        if(atualizarUsuario){
            return ResponseEntity.ok().build();
        }

        return  ResponseEntity.notFound().build();
    }


    @PutMapping("/{id}")
    @Operation(summary = "Método de atualização total do usuário!",
            description = "Método responsável por alterar qualquer dado do usuário!")
    public ResponseEntity<?> atualizar(@PathVariable Long id, @RequestBody UsuarioRequest usuario) {
        try {
            UsuarioResponse usuarioBanco = usuarioService.salvarUsuario(usuario,id);
            return ResponseEntity.ok(usuarioBanco);
        }catch (Exception e){
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }


    @DeleteMapping("/{id}/excluir")
    @Operation(summary = "Método de exclusão de usuário!",
            description = "Método responsável excluir usuários!")
    public ResponseEntity<Void> excluir(@PathVariable Long id){

        var atualizarUsuario = usuarioService.atualizarStatus(EnumStatusUsuario.EXCLUIDO,id);

        if(atualizarUsuario){
            return ResponseEntity.ok().build();
        }

        return  ResponseEntity.notFound().build();
    }

    @PatchMapping("/{id}/matricular")
    public  ResponseEntity<?> matricular(@PathVariable Long id, @RequestBody MatriculaRequest matriculaRequest){

        boolean retornoMatricula = usuarioService.matricularAluno(id,matriculaRequest);

        if(retornoMatricula){
            return ResponseEntity.ok().build();
        }

        return  ResponseEntity.notFound().build();
    }

    @GetMapping("/buscarusuariologado")
    @Operation(summary = "Usuario Logado",description = "Usuario logado")
    public ResponseEntity<UsuarioResponse> buscarUsuarioLogado(){
        return ResponseEntity.ok(usuarioService.BuscarUsuarioLogado());
    }

}
