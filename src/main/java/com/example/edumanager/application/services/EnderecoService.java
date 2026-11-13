package com.example.edumanager.application.services;

import com.example.edumanager.application.DTOs.EnderecoResponse;
import com.example.edumanager.domain.interfaces.IViaCepExternalRepository;
import com.example.edumanager.infra.external.ViaCepExternalRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class EnderecoService {

    @Autowired
    private IViaCepExternalRepository iViaCepExternalRepository;

    public EnderecoResponse BuscarEndereco(String cep) {

        var enderecoCompleto =  iViaCepExternalRepository.buscarEnderecoViaCepPorCep(cep);

        return new EnderecoResponse( enderecoCompleto.getCep(),
                enderecoCompleto.getLogradouro(),
                enderecoCompleto.getBairro(),
                enderecoCompleto.getLocalidade(),
                enderecoCompleto.getUf());


    }

}
