package com.example.edumanager.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.Year;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Turma {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nome;

    private Year ano;

    private String periodo;

    private String turno;

    private String sala;

    private String disciplina;

    private EnumStatusTurma status = EnumStatusTurma.ABERTA;

    // FK de turmaDisciplina
}
