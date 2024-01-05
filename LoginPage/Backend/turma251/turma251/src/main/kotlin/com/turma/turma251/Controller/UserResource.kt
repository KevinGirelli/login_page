package com.turma.turma251.Controller

import com.turma.turma251.Entity.usuario
import com.turma.turma251.Repository.UsuarioRepository
import com.turma.turma251.dto.usuarioView
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*


@RestController
@RequestMapping("/api")
@CrossOrigin(origins = ["http://localhost:8080"])
class UserResource(@Autowired private val usuarioRepository: UsuarioRepository) {

    @PostMapping("/login")
    fun verificarLogin(@RequestBody usuario: usuarioView): Any{
        var request = usuarioRepository.findByLogin(usuario.login)

        if(request.isEmpty()){
            return "Login não encontrado"
        }
        else if(request.get(0).senha == usuario.senha && request.get(0).login == usuario.login){
            var retornarUsuario = usuarioView(request[0].nome, request[0].login,
                request[0].senha)
            return retornarUsuario
        }
        return "erro"
    }

    @PostMapping("/cadastro")
    fun cadastro(@RequestBody usuario: usuario): ResponseEntity<String>{
        usuarioRepository.save(usuario)
        return ResponseEntity.status(HttpStatus.CREATED).body("Usuário cadastrado.")

    }
}