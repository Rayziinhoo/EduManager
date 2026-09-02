package com.example.edumanager.repository;

import com.example.edumanager.entities.Aluno;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AlunoRepository extends JpaRepository<Aluno, Long> {
    // Voltar aqui depois - preciso criar um metodo para alterar a situacao de aprovado e reprovado conforme a media
    // boolean existsAlunoByCPFAndStatus();
}
