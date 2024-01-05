package com.turma.turma251.Entity

import jakarta.persistence.*

@Entity
data class usuario(
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    var userID: Long,

    @Column(nullable = false)
    var nome: String,

    @Column(nullable = false)
    var login: String,

    @Column(nullable = false)
    var senha: String

)
