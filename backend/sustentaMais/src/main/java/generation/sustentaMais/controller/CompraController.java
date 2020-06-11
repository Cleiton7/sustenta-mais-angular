package generation.sustentaMais.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import generation.sustentaMais.model.Compra;
import generation.sustentaMais.repository.CompraRepository;

@RestController
@RequestMapping("/comprar")
@CrossOrigin("*")
public class CompraController {
	@Autowired
	private CompraRepository repository;
	
	@GetMapping
	public ResponseEntity<List<Compra>> GetAll() {
		return ResponseEntity.ok(repository.findAll());
	}
	
	@GetMapping("/{codigo}")
	public ResponseEntity<Compra> GetById(@PathVariable long codigo){
		return repository.findById(codigo).map(resp -> ResponseEntity.ok(resp)).orElse(ResponseEntity.notFound().build());
	}
	
	@PostMapping
	public ResponseEntity<Compra> Post(@RequestBody Compra compra) {
		return ResponseEntity.status(HttpStatus.CREATED).body(repository.save(compra));
	}
	
	@DeleteMapping("/{codigo}")
	public void Delete(@PathVariable long codigo) {
		repository.deleteById(codigo);
	}
}
