package generation.sustentaMais.controller;

import generation.sustentaMais.repository.UsuarioRepository;
import generation.sustentaMais.service.UsuarioService;
import generation.sustentaMais.model.Usuario;
import generation.sustentaMais.model.UsuarioLogado;
import generation.sustentaMais.model.UsuarioLogin;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/usuario")
@CrossOrigin("*")
public class UsuarioController {
	
	@Autowired
	private UsuarioRepository repository;
	
	// declaramos a UsuarioService e a importamos para poder consumir o método de cadastro que foi criado na Service
	@Autowired
	private UsuarioService usuarioService;
	
	@GetMapping
	public ResponseEntity<List<Usuario>> GetAll() {
		return ResponseEntity.ok(repository.findAll());
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<Usuario> GetById(@PathVariable long id){
		return repository.findById(id).map(resp -> ResponseEntity.ok(resp)).orElse(ResponseEntity.notFound().build());
	}
	
	@GetMapping("/nome/{nome}")
	public ResponseEntity<List<Usuario>> GetByNome(@PathVariable String nome){
		return ResponseEntity.ok(repository.findAllByNomeContainingIgnoreCase(nome));
	}
	
	// metodo para realizar o login
	@PostMapping("/login")
	public ResponseEntity<Object> Logar(@RequestBody UsuarioLogin usuarioLogin){
		Optional<UsuarioLogado> usuarioLogado = usuarioService.Logar(usuarioLogin);
		
		
		if(usuarioLogado.isPresent()) {
			return ResponseEntity.ok(usuarioLogado.get());
		}
		return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Acesso não autorizado");
	}
	
	
	@PostMapping
	public ResponseEntity<Usuario> Post(@RequestBody Usuario usuario) {
		return ResponseEntity.status(HttpStatus.CREATED).body(usuarioService.CadastrarUsuario(usuario)); // chama o metodo CadastrarUsuario da service
	}
	
	@PutMapping
	public ResponseEntity<Usuario> Put(@RequestBody Usuario usuario) {
		return ResponseEntity.status(HttpStatus.OK).body(usuarioService.CadastrarUsuario(usuario)); // chama o metodo CadastrarUsuario da service
	}
	
	@DeleteMapping("/{id}")
	public void Delete(@PathVariable long id) {
		repository.deleteById(id);
	}
}
