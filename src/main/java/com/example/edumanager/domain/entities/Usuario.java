package com.example.edumanager.domain.entities;

import com.example.edumanager.application.DTOs.CriarAdminRequest;
import com.example.edumanager.domain.valueobject.CPF;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Usuario {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nome;

    @Embedded
    private CPF cpf;

    private String senha;

    private String email;

    private String role = "ROLE_USER";

    private EnumStatusUsuario status = EnumStatusUsuario.ATIVO;

    public Usuario(CriarAdminRequest criarAdminRequest) {
        this.setCpf(new CPF(criarAdminRequest.cpf()));
        this.setNome(criarAdminRequest.nome());
        this.setSenha(criarAdminRequest.senha());
        this.setEmail(criarAdminRequest.email());
        this.setRole("ROLE_ADMIN");

    }

    // SENHAS DO BANCO DE DADOS 01091011 Sen@c2023

    // organizar os controller por ordem alphabetica
    // springdoc.swagger-ui.tagsSorter=alpha
    // organizar os métodos por ordem alphabetica
   // springdoc.swagger-ui.operationsSorter=alpha

    // dominio fica as regras de negocio
    // service chama os dominios de forma orquestrada
}
