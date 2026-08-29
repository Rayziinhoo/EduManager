package com.example.edumanager.controllers;

import com.example.edumanager.DTOs.LoginRequest;
import com.example.edumanager.DTOs.LoginResponse;
import com.example.edumanager.repository.UsuarioRepository;
import com.example.edumanager.services.TokenService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.SpringVersion;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.net.HttpURLConnection;

@RestController
@RequestMapping("/auth")
@Tag(description = "Controller de autenticação!", name = "Autenticação")
public class AuthController {

    @Autowired
    private TokenService tokenService;

    @Autowired
    private UsuarioRepository usuarioRepository;

    @PostMapping("/login")
    @Operation(description = "Método de login", summary = "Autenticação de usuário")
    public ResponseEntity<?> login( @RequestBody LoginRequest request){

        var usuarioBanco = usuarioRepository.existsUsuarioByEmailAndSenha(request.email(), request.senha());

        if (request.email().equals("string") && request.senha().equals("senha")) {

            var token = tokenService.gerarToken(request.email());
            return  ResponseEntity.ok(new LoginResponse(token));
        }
        return ResponseEntity.status(HttpURLConnection.HTTP_UNAUTHORIZED).build();
    }

}
