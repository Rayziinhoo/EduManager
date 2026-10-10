package com.example.edumanager.controllers;

import com.example.edumanager.DTOs.LoginRequest;
import com.example.edumanager.DTOs.LoginResponse;
import com.example.edumanager.repository.UsuarioRepository;
import com.example.edumanager.services.TokenService;
import com.example.edumanager.services.UsuarioService;
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
@Tag(description = "Autenticação controller", name = "Autenticação, recuperação de conta/senha do usuario!")
public class AuthController {

    @Autowired
    private UsuarioService usuarioService;

    @PostMapping("/login")
    @Operation(description = "Login", summary = "Método responsavel por efetuar o login do usuário!")
    public ResponseEntity<?> login( @RequestBody LoginRequest request){

        var resultadoAutenticacaoRetornoToken = usuarioService.validarUsuarioAutenticadoRetornaToken(request);

        if (resultadoAutenticacaoRetornoToken != null) {
            return ResponseEntity.ok(resultadoAutenticacaoRetornoToken);
        }
        return ResponseEntity.badRequest().body("Usuário ou senha Invalido!");

    }

}
