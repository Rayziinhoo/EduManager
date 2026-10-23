package com.example.edumanager.application.DTOs;

import com.example.edumanager.domain.entities.Usuario;
import com.example.edumanager.domain.valueobject.CPF;

public record UsuarioLogado(Long id, String email, CPF cpf,
                            java.util.Collection<? extends org.springframework.security.core.GrantedAuthority> authorities) {

    public UsuarioLogado(Usuario usuario){
        this(
                usuario.getId(),
                usuario.getEmail(),
                usuario.getCpf(),
                usuario.getAuthorities()
        );
    }
}
