package com.example.edumanager.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
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

    private String cpf;

    private String senha;

    private String email;

    private EnumStatusUsuario status = EnumStatusUsuario.ATIVO;

    // SENHAS DO BANCO DE DADOS 01091011 Sen@c2023

    // organizar os controller por ordem alphabetica
    // springdoc.swagger-ui.tagsSorter=alpha
    // organizar os métodos por ordem alphabetica
   // springdoc.swagger-ui.operationsSorter=alpha
}
