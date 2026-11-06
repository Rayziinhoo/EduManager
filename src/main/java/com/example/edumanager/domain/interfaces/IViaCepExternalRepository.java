package com.example.edumanager.domain.interfaces;

import com.example.edumanager.infra.dto.ViaCepResponse;

public interface IViaCepExternalRepository {

    ViaCepResponse buscarEnderecoViaCepPorCep(String cep);
}
