package com.example.edumanager.application.services;

import com.example.edumanager.application.DTOs.LoginRequest;
import com.example.edumanager.application.DTOs.LoginResponse;
import com.example.edumanager.application.DTOs.UsuarioRequest;
import com.example.edumanager.application.DTOs.UsuarioResponse;
import com.example.edumanager.domain.entities.Usuario;
import com.example.edumanager.domain.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UsuarioService {

    @Autowired
    private UsuarioRepository usuarioRepository;

    @Autowired
    private TokenService tokenService;

    public LoginResponse validarUsuarioAutenticadoRetornaToken(LoginRequest resquest) {

        if (usuarioRepository.existsUsuarioByEmailAndSenha(resquest.email(), resquest.senha())) {

            var token = tokenService.gerarToken(resquest);
            return new LoginResponse(token);
        }
        return null;
    }


    public List<UsuarioResponse> listarTodosUsuariosTable(){

        // tem algo faltando aqui

        return  usuarioRepository.findAll()
                .stream()
                .map(UsuarioResponse::new)
                .toList();
    }

    public UsuarioResponse salvarUsuario(UsuarioRequest usuario) {

        Usuario usuarioBanco = new Usuario(usuario);

        usuarioRepository.save(usuarioBanco);

        return new UsuarioResponse(usuarioBanco);
    }
}
