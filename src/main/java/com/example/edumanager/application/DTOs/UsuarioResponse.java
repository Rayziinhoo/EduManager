package com.example.edumanager.application.DTOs;

import com.example.edumanager.domain.entities.EnumStatusUsuario;
import com.example.edumanager.domain.entities.Usuario;

public record UsuarioResponse(Long id, String nome, String cpf, String email, EnumStatusUsuario status) {

    public UsuarioResponse(Usuario usuarioEntidade){

        this(
                usuarioEntidade.getId(),
                usuarioEntidade.getNome(),
                usuarioEntidade.getCpf().toString(),
                usuarioEntidade.getEmail(),
                usuarioEntidade.getStatus()
        );
    }
}
