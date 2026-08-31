package com.example.edumanager.repository;

import com.example.edumanager.entities.EnumStatusUsuario;
import com.example.edumanager.entities.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;


public interface UsuarioRepository extends JpaRepository<Usuario, Long> {

    boolean existsUsuarioByEmailAndSenha(String email, String senha);
    boolean existsUsuarioByCpfAndEmail(String cpf, String email);
    Optional<List<Usuario>> findByStatusNot(EnumStatusUsuario status);
}
