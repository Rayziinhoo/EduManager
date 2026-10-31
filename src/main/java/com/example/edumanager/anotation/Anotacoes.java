package com.example.edumanager.anotation;

import com.example.edumanager.application.DTOs.UsuarioRequest;
import com.example.edumanager.application.DTOs.UsuarioResponse;
import com.example.edumanager.domain.entities.Empresa;
import com.example.edumanager.domain.entities.Usuario;
import com.example.edumanager.domain.repository.UsuarioRepository;
import com.example.edumanager.domain.valueobject.CPF;
import jakarta.persistence.FetchType;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import org.springframework.beans.factory.annotation.Autowired;

public class Anotacoes {

    // Armazenamento de todas anotações

    // estava anotado na TokenService - acredito ser algo relacionado as liberações
    // páginas que não precisam de token para acessar e realizar a funcionalidade
    // cadastre-se - recuperar conta - esqueci minha senha - landinpage

    //-------------------

    // Salvar Usuario - um dos metodos do CRUD
    /*public UsuarioResponse salvarUsuario(UsuarioRequest usuario, Long id) {

        //Novo Usuario - caso não ter um usuario ele precisa ser salvo
        var usuarioLogado = getUsuarioLogado();

        if (id == 0L) {
            Usuario usuarioBanco = new Usuario(usuario);
            usuarioRepository.save(usuarioBanco);

            return new UsuarioResponse(usuarioBanco);
        } else {

            // caso o usuario existir ele será atualizado apenas
            //Usuario existente
            Usuario usuarioBanco = usuarioRepository.findById(id).orElse(null);

            if (usuarioBanco != null) {
                usuarioBanco.setNome(usuario.nome());
                usuarioBanco.setCpf(new CPF(usuario.cpf()));
                usuarioBanco.setEmail(usuario.email());
                usuarioBanco.setSenha(usuario.senha());
                usuarioRepository.save(usuarioBanco);
                return new UsuarioResponse(usuarioBanco);
            }
        }
        return null;
    }*/

    //-------------------

    // modelo de carregamento quando precisar - EAGER - quando não precisar LAZY
    /*@ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "empresa_id", referencedColumnName = "id")
    private Empresa empresa;*/

    //-------------------

    // SENHAS DO BANCO DE DADOS 01091011 Sen@c2023

    // organizar os controller por ordem alphabetica
    // springdoc.swagger-ui.tagsSorter=alpha

    // organizar os métodos por ordem alphabetica
    // springdoc.swagger-ui.operationsSorter=alpha

    // dominio fica as regras de negocio

    // service chama os dominios de forma orquestrada

    // não pode haver imports de pastas erradas - application -> domain
    // application <- domain -> repository
    // domain <- repository -> infra
    // repository <- infra -> presentation
    // infra <- presetation

    //-------------------

    // Values object são objetos
    // --------------
    // INJENÇÃO DE INDEPENDENCIA
    /*@Autowired
    private UsuarioRepository usuarioRepository;*/

}
