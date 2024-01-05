package com.turma.turma251.Repository

import com.turma.turma251.Entity.usuario
import org.springframework.data.jpa.repository.JpaRepository

interface UsuarioRepository: JpaRepository<usuario, Long> {
    fun findByLogin(nome: String): List<usuario>
}