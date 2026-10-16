package com.example.edumanager.presentation;

import com.example.edumanager.application.DTOs.LoginResponse;
import com.example.edumanager.application.DTOs.RecuperacaoRequest;
import com.example.edumanager.domain.repository.UsuarioRepository;
import com.example.edumanager.application.services.TokenService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.net.HttpURLConnection;

// controler para recuperar conta
@RestController
@RequestMapping("/recup")
@Tag( name = "Autenticação")
public class RecuperarController {

    @Autowired
    private TokenService tokenService;

    @Autowired
    private UsuarioRepository usuarioRepository;

    @PostMapping("/conta")
    @Operation(description = "Método de recuperação", summary = "Recuperação de conta")
    public ResponseEntity<?> recuperacao(@RequestBody RecuperacaoRequest request){

        var usuarioBanco = usuarioRepository.existsUsuarioByCpfAndEmail(request.email(), request.cpf());

        if (usuarioRepository.existsUsuarioByCpfAndEmail(request.email(), request.cpf())) {

            var token = tokenService.gerarToken(request.cpf());
            return  ResponseEntity.ok(new LoginResponse(token));
        }
        return ResponseEntity.status(HttpURLConnection.HTTP_UNAUTHORIZED).build();
    }
}
