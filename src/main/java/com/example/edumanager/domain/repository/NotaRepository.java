package com.example.edumanager.domain.repository;

import com.example.edumanager.domain.entities.Nota;
import org.springframework.data.jpa.repository.JpaRepository;

public interface NotaRepository extends JpaRepository<Nota, Long> {
}
