package generation.sustentaMais.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import generation.sustentaMais.model.Produto;

public interface ProdutoRepository extends JpaRepository<Produto, Long>{
	public List<Produto> findAllByNomeContainingIgnoreCase (String nome);
}
