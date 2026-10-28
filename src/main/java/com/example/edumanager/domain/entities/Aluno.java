package com.example.edumanager.domain.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Aluno {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nome;

    private String senha;

    private String CPF;

    private String email;

    private Date dataNascimento;

    public String matricula;

    private Date dataMatricula;

    private EnumStatusAluno status = EnumStatusAluno.ATIVO;

    private  EnumSituacaoAluno situacao = EnumSituacaoAluno.APROVADO;

    // FK de turma

    // FK de nota
}
